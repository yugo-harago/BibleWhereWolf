<script setup lang="ts">
import { computed } from 'vue';
import BaseButton from '../atoms/BaseButton.vue';

const props = defineProps<{
  time: number;
  isRunning: boolean;
}>();

const emit = defineEmits<{
  (e: 'start'): void;
  (e: 'stop'): void;
  (e: 'reset'): void;
}>();

const formattedTime = computed(() => {
  const minutes = Math.floor(props.time / 60);
  const seconds = props.time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});
</script>

<template>
  <div class="card p-4 shadow-sm text-center">
    <h2 class="display-1 mb-4 font-monospace">{{ formattedTime }}</h2>
    
    <div class="d-flex justify-content-center gap-2">
      <BaseButton 
        v-if="!isRunning && time > 0" 
        variant="primary" 
        @click="emit('start')"
      >
        スタート
      </BaseButton>
      
      <BaseButton 
        v-if="isRunning" 
        variant="warning" 
        @click="emit('stop')"
      >
        ストップ
      </BaseButton>

      <BaseButton 
        variant="secondary" 
        @click="emit('reset')"
      >
        リセット
      </BaseButton>
    </div>
  </div>
</template>
