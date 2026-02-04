<template>
  <div class="filters">
    <VaInput
      v-model="store.searchQuery"
      placeholder="Search leagues..."
      clearable
      class="search-field"
    />

    <VaDropdown
      :close-on-content-click="true"
      class="custom-dropdown"
      :placement="'bottom-start'"
      keep-anchor-width
    >
      <template #anchor>
        <div class="dropdown-trigger">
          <span :class="{ 'placeholder': !store.selectedSport }">
            {{ selectedSportLabel }}
          </span>
          <va-icon name="expand_more" color="#adb5bd" />
        </div>
      </template>

      <VaDropdownContent class="dropdown-list">
        <div
          v-for="item in sports"
          :key="item.value"
          class="dropdown-item"
          :class="{ 'active': store.selectedSport === item.value }"
          @click="store.selectedSport = item.value"
        >
          {{ item.label }}
        </div>
      </VaDropdownContent>
    </VaDropdown>
  </div>
</template>

<script lang="ts" setup>

import { useLeagueStore } from "@/stores/leagueStore";
import { SportTypes } from '@/common/constants/sportTypes'
import { computed } from 'vue'
const store = useLeagueStore();
const sports = Object.values(SportTypes);

const selectedSportLabel = computed(() => {
  if (!store.selectedSport) return SportTypes.all.label;

  const found = sports.find(sport => sport.value === store.selectedSport);
  return found ? found.label : SportTypes.all.label;
});
</script>

<style scoped>
.filters {
  display: flex;
  gap: .8rem;
  align-items: center;
}

.search-field {
  flex: 1;
  --va-input-wrapper-border-radius: var(--radius-input);
  --va-input-wrapper-background: var(--input-bg);
  font-size: var(--font-size-input);
}

:deep(.va-input-wrapper__field):hover {
  border-color: var(--input-hover-boder);
}

:deep(.va-input-wrapper__field) {
  transition: border-color 0.2s;
  height: var(--input-height);
  border: 1px solid var(--border-color);
}

.custom-dropdown {
  width: 20rem;
}

.dropdown-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--input-bg);
  padding: 0 1rem;
  height: var(--input-height);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-input);
  cursor: pointer;
  font-size: var(--font-size-input);
  transition: border-color 0.2s;
}

.dropdown-trigger:hover {
  border-color: var(--input-hover-boder);
}

.placeholder {
  color: var(--input-hover-boder);
}

.dropdown-list {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-input);
  background: var(--input-bg);
  padding: 0.6rem 0;
  margin-top: 2px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.dropdown-item {
  padding: 0.6rem 1rem;
  cursor: pointer;
  transition: background 0.2s;
  color: var(--text-main);
}

.dropdown-item:hover {
  background: var(--bg-secondary);
}

.dropdown-item.active {
  color: var(--va-primary);
  font-weight: 600;
  background: var(--bg-secondary);
}

/*Tablet*/
@media (max-width: 960px) {
  .custom-dropdown {
    width: 14rem;
  }
}

/* mobile */
@media (max-width: 640px) {
  .filters {
    flex-direction: column;
    align-items: stretch;
  }
  .custom-dropdown {
    width: 100%;
  }
}
</style>
