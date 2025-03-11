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

const squirrels = ref('')
const url = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json/'
async function getData(url, squirrels) {
  let result = await fetch(url)
  let data = await result.json()
  console.log(data)
  squirrels.value = data
}

onMounted(() => {
  getData(url, squirrels)
  console.log('ailsdhfbikl')
})
</script>

<style lang="scss" scoped></style>
