<template>
  <div class="container">
    <main>
      <div v-if="!showSquirrels" class="button" @click="showSquirrels = true">
        <div class="button-content">
          <img src="/squrriel.png" alt="Squirrel Image" />
          <p>Click to view ID, fur color, and location of all documented squrriels in Central Park in 2018!</p>
        </div>
      </div>
      <div v-if="showSquirrels">
        <div class="cards-container">
          <SquirrelCard
            v-for="squirrel in squirrels"
            :key="squirrel.unique_squirrel_id"
            :squirrel="squirrel"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SquirrelCard from '../components/SquirrelCard.vue'

const squirrels = ref([])
const showSquirrels = ref(false)

const url = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json/'

async function getData(url) {
  const result = await fetch(url)
  const data = await result.json()
  squirrels.value = data
}

onMounted(() => {
  getData(url)
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.button-content {
  text-align: center;
}

img {
  width: 200px;
  height: 260px;
  object-fit: cover;
}

p {
  margin-top: 10px;
  font-size: 18px;
  color: black;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
  padding: 20px;
  width: 100%;
  margin-top: 20px;
}
</style>
