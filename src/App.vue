<script setup lang="ts">
import SetupPage from './pages/SetupPage.vue';
import RevealPage from './pages/RevealPage.vue';
import GamePage from './pages/GamePage.vue';
import { useGame } from './composables/useGame';

const { phase } = useGame();
</script>

<template>
  <SetupPage v-if="phase === 'setup'" />
  <RevealPage v-else-if="phase === 'reveal'" />
  <GamePage v-else-if="phase === 'game'" />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
