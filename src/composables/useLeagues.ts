import { useQuery } from '@tanstack/vue-query';
import type { League, AllLeaguesResponse, LeagueDetail } from '@/types/league';
import { computed, type MaybeRefOrGetter, toValue } from 'vue'
import api from '@/services/api'
import QueryFactory from '@/common/constants/queryFactory'



export const useLeagues = () => {
  return useQuery({
    queryKey: QueryFactory.leagues,
    queryFn: async (): Promise<League[]> => {
      const { data } = await api.get<AllLeaguesResponse>('/all_leagues.php');
      return data.leagues;
    },
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes
  });
};

export const useLeagueBadge = (leagueId: MaybeRefOrGetter<string | null | undefined>) => {
  return useQuery({
    queryKey: QueryFactory.leagueBadge(computed(() => toValue(leagueId)).value || ''),

    queryFn: async (): Promise<LeagueDetail | null> => {
      const id = toValue(leagueId);
      if (!id) return null;

      const { data } = await api.get(
        `/lookupleague.php?id=${id}`
      );
      return data.leagues?.[0] || null;
    },

    enabled: computed(() => !!toValue(leagueId)),
    staleTime: 1000 * 60 * 30, // Cache for 30 minutes
  });
};
