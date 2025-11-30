import { ref, computed } from 'vue';
import { verses, type VersePair } from '../data/verses';

export type GamePhase = 'setup' | 'reveal' | 'game' | 'result';

export interface Player {
  id: number;
  isWolf: boolean;
  seenRole: boolean;
}

const phase = ref<GamePhase>('setup');
const playerCount = ref(3);
const wolfCount = ref(1);
const players = ref<Player[]>([]);
const currentVerse = ref<VersePair | null>(null);
const currentPlayerIndex = ref(0);
const timer = ref(180); // 3 minutes default
const timerInterval = ref<number | null>(null);

export function useGame() {
  const currentPlayer = computed(() => players.value[currentPlayerIndex.value]);
  const isTimerRunning = computed(() => timerInterval.value !== null);

  function startGame(pCount: number, wCount: number) {
    playerCount.value = pCount;
    wolfCount.value = wCount;
    
    // Select random verse
    const verseIndex = Math.floor(Math.random() * verses.length);
    currentVerse.value = verses[verseIndex];

    // Create players and assign roles
    const newPlayers: Player[] = Array.from({ length: pCount }, (_, i) => ({
      id: i + 1,
      isWolf: false,
      seenRole: false,
    }));

    // Assign wolves randomly
    let wolvesAssigned = 0;
    while (wolvesAssigned < wCount) {
      const randomIndex = Math.floor(Math.random() * pCount);
      if (!newPlayers[randomIndex].isWolf) {
        newPlayers[randomIndex].isWolf = true;
        wolvesAssigned++;
      }
    }

    players.value = newPlayers;
    currentPlayerIndex.value = 0;
    phase.value = 'reveal';
  }

  function nextPlayer() {
    if (currentPlayerIndex.value < players.value.length - 1) {
      currentPlayerIndex.value++;
    } else {
      phase.value = 'game';
    }
  }

  function startTimer() {
    if (timerInterval.value) return;
    timerInterval.value = window.setInterval(() => {
      if (timer.value > 0) {
        timer.value--;
      } else {
        stopTimer();
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval.value) {
      clearInterval(timerInterval.value);
      timerInterval.value = null;
    }
  }

  function resetGame() {
    phase.value = 'setup';
    players.value = [];
    currentVerse.value = null;
    currentPlayerIndex.value = 0;
    timer.value = 180;
    stopTimer();
  }

  return {
    phase,
    playerCount,
    wolfCount,
    players,
    currentVerse,
    currentPlayer,
    currentPlayerIndex,
    timer,
    isTimerRunning,
    startGame,
    nextPlayer,
    startTimer,
    stopTimer,
    resetGame,
  };
}
