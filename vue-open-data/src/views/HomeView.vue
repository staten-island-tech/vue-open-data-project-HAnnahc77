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
import { useRoute } from 'vue-router'
import SquirrelCard from '../components/SquirrelCard.vue'

const squirrels = ref([])

async function getData() {
  try {
    let result = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json/')
    let data = await result.json()
    squirrels.value = data.results
  } catch (error) {
    console.error('Error fetching squirrel data:', error)
  }
}

onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped></style>
