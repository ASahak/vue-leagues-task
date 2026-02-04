<template>
  <va-card @click="$emit('select')" class="league-card" bordered>
    <va-card-content class="card-body">
      <div class="card-title">{{ league.strLeague }}</div>
      <div class="card-sport">{{ league.strSport }}</div>
      <va-divider class="card-divider" />
      <div class="card-alternate">{{ league.strLeagueAlternate || league.strLeague }}</div>
    </va-card-content>
  </va-card>
</template>

<script setup lang="ts">
import type { League } from '@/types/league';

defineProps<{ league: League }>();
defineEmits<{ (e: 'select'): void }>();
</script>

<style scoped>
.league-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-card);
  cursor: pointer;
  transition: all 0.2s ease;
  height: 100%;
  box-shadow: none;
}

.league-card:hover {
  border-color: var(--text-muted);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.card-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.card-sport {
  color: var(--text-secondary);
  font-weight: 600;
}

.card-divider {
  margin: .8rem 0;
}
</style>
