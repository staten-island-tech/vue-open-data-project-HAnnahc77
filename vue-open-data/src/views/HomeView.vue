<template>
  <main>
    <SquirrelCard
      v-for="squirrel in squirrels"
      :key="squirrel.unique_squirrel_id"
      :squirrel="squirrel"
    />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SquirrelCard from '../components/SquirrelCard.vue'

const squirrels = ref([])

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
</style>
