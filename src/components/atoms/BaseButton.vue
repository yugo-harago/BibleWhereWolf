<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();
</script>

<template>
  <button
    :type="type || 'button'"
    class="btn"
    :class="`btn-${variant || 'primary'}`"
    :disabled="disabled"
    @click="emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>
