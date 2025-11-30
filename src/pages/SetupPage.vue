<script setup lang="ts">
import GameLayout from '../components/templates/GameLayout.vue';
import SetupForm from '../components/organisms/SetupForm.vue';
import { useGame } from '../composables/useGame';

const { startGame } = useGame();

function handleStart({ players, wolves, duration }: { players: number; wolves: number; duration: number }) {
  startGame(players, wolves, duration);
}
</script>

<template>
  <GameLayout>
    <SetupForm @start="handleStart" />
  </GameLayout>
</template>
