<template>
  <VaModal
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue')"
    hide-default-actions
  >
    <div class="modal-fixed-box">
      <div class="modal-header">
        <div class="header-text">
          <h3 class="va-h6 m-0">{{ details?.strLeague || 'League Details' }}</h3>
        </div>
        <VaButton preset="plain" icon="close" @click="$emit('update:modelValue', false)"/>
      </div>

      <VaDivider class="m-0" />

      <div class="modal-body">
        <VaInnerLoading :loading="isLoading || isFetching" :size="60" class="content-loader">
          <div v-if="details" class="content-layout">

            <div class="top-row">
              <div class="image-container">
                <img :src="details.strBadge" class="league-img" />
              </div>

              <div class="meta-container">
                <div class="info-item">
                  <p class="mb-2">Country</p>
                  <strong>{{ details.strCountry }}</strong>
                </div>
                <div class="info-item">
                  <p class="mb-2">Season</p>
                  <strong>{{ details.strCurrentSeason }}</strong>
                </div>
                <div class="info-item">
                  <p class="mb-2">Formed</p>
                  <strong>{{ details.intFormedYear }}</strong>
                </div>
              </div>
            </div>

            <VaDivider class="my-4" />

            <div class="bottom-row">
              <span class="desc-title">About the League</span>
              <div class="desc-box">
                <p>{{ details.strDescriptionEN }}</p>
              </div>
            </div>
          </div>

          <div v-else-if="!isLoading && !isFetching" class="error-state">
            <VaAlert color="warning" outline>Could not load league details.</VaAlert>
          </div>
        </VaInnerLoading>
      </div>
    </div>
  </VaModal>
</template>

<script setup lang="ts">
import { useLeagueBadge } from '@/composables/useLeagues'

const props = defineProps<{
  modelValue: boolean
  leagueId: string | null | undefined
}>()

defineEmits(['update:modelValue'])

const { data: details, isLoading, isFetching } = useLeagueBadge(() =>
  props.modelValue ? props.leagueId : null
);
</script>

<style scoped>
:deep(.va-modal__dialog) {
  width: 60rem;
  height: 620px !important;
  display: flex;
  flex-direction: column;
}
:deep(.va-modal__inner), :deep(.va-modal__message) {
  height: 100%;
}

.modal-fixed-box {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
}

.content-loader {
  height: 100%;
}

.modal-header {
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  flex: 1;
  padding: 1.5rem;
  overflow: hidden; /* Prevents modal-wide scrolling */
}

.top-row {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 1.5rem;
  height: 180px;
}

.image-container {
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.league-img {
  max-width: 100%;
  max-height: 120px;
  object-fit: contain;
}

.meta-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.info-item p {
  margin: 0;
  font-size: 10px;
  color: var(--text-secondary);
  text-transform: uppercase;
  font-weight: 700;
}

.desc-box {
  height: 200px;
  overflow-y: auto;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
  padding-right: 10px;
}

.desc-title {
  display: block;
  font-size: 1rem;
  margin-bottom: .7rem;
  font-weight: 700;
}

/* Custom Scrollbar for clean UI */
.desc-box::-webkit-scrollbar { width: 4px; }
.desc-box::-webkit-scrollbar-thumb { background: #dee2e6; border-radius: 10px; }
</style>
