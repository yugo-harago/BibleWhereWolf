<script setup lang="ts">
import { ref, computed } from 'vue';
import BaseButton from '../atoms/BaseButton.vue';
import type { Player, VersePair } from '../../composables/useGame';

const props = defineProps<{
  player: Player;
  verse: VersePair;
  playerIndex: number;
}>();

const emit = defineEmits<{
  (e: 'next'): void;
}>();

const isRevealed = ref(false);

const verseToShow = computed(() => {
  if (props.player.isWolf) {
    return props.verse.wolf;
  }
  return props.verse.majority;
});

function toggleReveal() {
  isRevealed.value = !isRevealed.value;
}

function handleNext() {
  isRevealed.value = false;
  emit('next');
}
</script>

<template>
  <div class="card p-4 shadow-sm text-center">
    <h3 class="mb-4">プレイヤー {{ playerIndex + 1 }}</h3>
    
    <div v-if="!isRevealed">
      <p class="mb-4">画面を他の人に見られないようにして確認してください。</p>
      <BaseButton @click="toggleReveal">
        お題を確認する
      </BaseButton>
    </div>

    <div v-else>
      <div class="verse-container mb-4 p-3 bg-light rounded">
        <h4 class="verse-ref mb-2">{{ verseToShow.reference }}</h4>
        <p class="verse-text lead">{{ verseToShow.text }}</p>
      </div>
      <BaseButton variant="success" @click="handleNext">
        確認しました
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>
.verse-container {
  border-left: 4px solid var(--bs-primary);
}
</style>
