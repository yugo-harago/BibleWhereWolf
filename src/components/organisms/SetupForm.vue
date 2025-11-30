<script setup lang="ts">
import { ref, computed } from 'vue';
import LabeledInput from '../molecules/LabeledInput.vue';
import BaseButton from '../atoms/BaseButton.vue';

const emit = defineEmits<{
  (e: 'start', payload: { players: number; wolves: number; duration: number }): void;
}>();

const players = ref(3);
const wolves = ref(1);
const duration = ref(3);

const isValid = computed(() => {
  return players.value > wolves.value + 1 && players.value >= 3 && wolves.value >= 1 && duration.value >= 1;
});

function startGame() {
  if (isValid.value) {
    emit('start', { players: players.value, wolves: wolves.value, duration: duration.value });
  }
}
</script>

<template>
  <div class="card p-4 shadow-sm">
    <h2 class="text-center mb-4">ゲーム設定</h2>
    <form @submit.prevent="startGame">
      <LabeledInput
        id="players"
        label="プレイヤー人数"
        v-model="players"
        type="number"
        :min="3"
      />
      <LabeledInput
        id="wolves"
        label="人狼の数"
        v-model="wolves"
        type="number"
        :min="1"
      />
      <LabeledInput
        id="duration"
        label="話し合い時間（分）"
        v-model="duration"
        type="number"
        :min="1"
      />
      <div class="d-grid gap-2 mt-4">
        <BaseButton type="submit" :disabled="!isValid">
          ゲーム開始
        </BaseButton>
      </div>
      <div v-if="!isValid" class="text-danger mt-2 small text-center">
        プレイヤーは人狼より少なくとも2人多く、合計3人以上である必要があります。
      </div>
    </form>
  </div>
</template>
