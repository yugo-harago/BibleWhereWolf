<script setup lang="ts">
import GameLayout from '../components/templates/GameLayout.vue';
import RevealCard from '../components/organisms/RevealCard.vue';
import { useGame } from '../composables/useGame';

const { currentPlayer, currentVerse, currentPlayerIndex, nextPlayer } = useGame();

function handleNext() {
  nextPlayer();
}
</script>

<template>
  <GameLayout>
    <RevealCard
      v-if="currentPlayer && currentVerse"
      :player="currentPlayer"
      :verse="currentVerse"
      :player-index="currentPlayerIndex"
      @next="handleNext"
    />
  </GameLayout>
</template>
