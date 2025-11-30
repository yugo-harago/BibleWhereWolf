<script setup lang="ts">
import BaseInput from '../atoms/BaseInput.vue';

defineProps<{
  id: string;
  label: string;
  modelValue: string | number;
  type?: string;
  min?: number;
  max?: number;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
}>();
</script>

<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <BaseInput
      :id="id"
      :model-value="modelValue"
      :type="type"
      :min="min"
      :max="max"
      @update:modelValue="emit('update:modelValue', $event)"
    />
  </div>
</template>
