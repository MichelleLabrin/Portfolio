<template>
  <div>
    <h1>Memory Game</h1>
    <div v-if="gameOver">
      <p>¡Felicidades! Has ganado.</p>
      <button @click="resetGame">Jugar de nuevo</button>
    </div>
    <div v-else>
      <div class="cards">
        <div
          v-for="card in shuffledCards"
          :key="card.id"
          class="card"
          :class="{ flipped: card.flipped, matched: card.matched }"
          @click="handleCardClick(card)"
        >
          {{ card.flipped || card.matched ? card.value : '?' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const cards = ref([
  { id: 1, value: 'A', flipped: false, matched: false },
  { id: 2, value: 'A', flipped: false, matched: false },
  { id: 3, value: 'B', flipped: false, matched: false },
  { id: 4, value: 'B', flipped: false, matched: false },
  { id: 5, value: 'C', flipped: false, matched: false },
  { id: 6, value: 'C', flipped: false, matched: false },
]);

const shuffledCards = ref([]);
const flippedCards = ref([]);
const gameOver = ref(false);

const shuffleCards = () => {
  shuffledCards.value = [...cards.value].sort(() => Math.random() - 0.5);
};

const handleCardClick = (clickedCard) => {
  if (flippedCards.value.length < 2 && !flippedCards.value.includes(clickedCard) && !clickedCard.flipped && !clickedCard.matched) {
    clickedCard.flipped = true;
    flippedCards.value.push(clickedCard);

    if (flippedCards.value.length === 2) {
      setTimeout(() => checkMatch(), 1000);
    }
  }
};

const checkMatch = () => {
  const [card1, card2] = flippedCards.value;

  if (card1.value === card2.value) {
    card1.matched = true;
    card2.matched = true;
  } else {
    card1.flipped = false;
    card2.flipped = false;
  }

  flippedCards.value = [];

  if (cards.value.every(card => card.matched)) {
    gameOver.value = true;
  }
};

const resetGame = () => {
  cards.value.forEach(card => {
    card.flipped = false;
    card.matched = false;
  });
  flippedCards.value = [];
  shuffleCards();
  gameOver.value = false;
};

onMounted(() => {
  shuffleCards();
});
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 100px;
  height: 100px;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  margin: 5px;
  user-select: none;
}

.flipped {
  background-color: #fff;
}

.matched {
  background-color: #a0a0a0;
  cursor: not-allowed;
}
</style>
