<script setup lang="ts">
import GameLayout from '../components/templates/GameLayout.vue';
import SetupForm from '../components/organisms/SetupForm.vue';
import { useGame } from '../composables/useGame';

const { startGame } = useGame();

function handleStart({ players, wolves }: { players: number; wolves: number }) {
  startGame(players, wolves);
}
</script>

<template>
  <GameLayout>
    <SetupForm @start="handleStart" />
  </GameLayout>
</template>
