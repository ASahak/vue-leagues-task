<template>
  <div class="container mx-auto px-4 py-8">
    <div class="v-stack">
      <h1 class="display-title mb-8"><span class="icon">🏆</span> Sports Leagues Finder</h1>

      <VaDivider />

      <LeagueFilters />

      <va-inner-loading :loading="isLoading" :size="60" class="grid-loader-wrapper">
        <div v-if="filteredLeagues.length > 0" class="league-grid">
          <div v-for="league in filteredLeagues" :key="league.idLeague">
            <LeagueCard :league="league" @select="handleSelect(league)" />
          </div>
        </div>

        <!-- No Data -->
        <div v-else-if="!isLoading" class="no-data-state">
          <va-icon name="search_off" size="4rem" color="secondary" class="mb-4" />
          <h3 class="va-h5">No leagues found</h3>
          <p class="text-secondary">
            We couldn't find any results for <b>"{{ store.searchQuery }}"</b>.
            Try adjusting your filters or search terms.
          </p>
        </div>
      </va-inner-loading>
    </div>

    <BadgeModal
      v-model="showModal"
      :league-id="selectedLeague?.idLeague"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLeagueStore } from '@/stores/leagueStore'
import { useLeagues } from '@/composables/useLeagues'
import LeagueFilters from '@/components/LeagueFilters.vue'
import LeagueCard from '@/components/LeagueCard.vue'
import BadgeModal from '@/components/BadgeModal.vue'
import type { League } from '@/types/league'

const store = useLeagueStore()
const { data: leagues, isLoading } = useLeagues()

const showModal = ref(false)
const selectedLeague = ref<League | null>(null)

const filteredLeagues = computed(() => store.getFilteredLeagues(leagues.value))

const handleSelect = (league: League) => {
  selectedLeague.value = league
  showModal.value = true
}

</script>

<style scoped>
.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 2rem 1rem;
  flex: 1;
  width: 100%;
  display: flex;
}

.display-title {
  font-size: 1.6rem;
}

.v-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.grid-loader-wrapper {
  height: 100%;
  width: 100%;
}

.league-grid {
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
}

.no-data-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  margin-top: 2rem;
}

.text-secondary {
  color: #6c757d;
  max-width: 400px;
  margin: 0.5rem auto;
}

/* Tablet: 2 columns */
@media (max-width: 1024px) {
  .league-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

/* Mobile: 1 column */
@media (max-width: 640px) {
  .league-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

</style>
