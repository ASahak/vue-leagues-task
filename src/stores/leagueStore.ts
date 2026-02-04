import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { League } from '@/types/league';
import { SportTypes } from '@/common/constants/sportTypes'

export const useLeagueStore = defineStore('league', () => {
  const searchQuery = ref('');
  const selectedSport = ref('');

  const getFilteredLeagues = (leagues: League[] | undefined) => {
    if (!leagues) return [];

    return leagues.filter((league) => {
      const matchesSearch = league.strLeague
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase());

      const matchesSport =
        !selectedSport.value ||
        selectedSport.value === SportTypes.all.value ||
        league.strSport === selectedSport.value;

      return matchesSearch && matchesSport;
    });
  };

  return { searchQuery, selectedSport, getFilteredLeagues };
});
