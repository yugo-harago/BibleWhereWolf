<script setup lang="ts">
defineProps<{
  modelValue: string | number;
  type?: string;
  placeholder?: string;
  min?: number;
  max?: number;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
}>();

function updateValue(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>

<template>
  <input
    :type="type || 'text'"
    class="form-control"
    :value="modelValue"
    :placeholder="placeholder"
    :min="min"
    :max="max"
    @input="updateValue"
  />
</template>
