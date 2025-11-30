<script setup lang="ts">
import GameLayout from '../components/templates/GameLayout.vue';
import TimerDisplay from '../components/organisms/TimerDisplay.vue';
import { useGame } from '../composables/useGame';

const { timer, isTimerRunning, startTimer, stopTimer, resetGame } = useGame();
</script>

<template>
  <GameLayout>
    <TimerDisplay
      :time="timer"
      :is-running="isTimerRunning"
      @start="startTimer"
      @stop="stopTimer"
      @reset="resetGame"
    />
  </GameLayout>
</template>
