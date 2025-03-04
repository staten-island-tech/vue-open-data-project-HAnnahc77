<template>
  <main>
    <SquirrelCard v-for="squirrel in squirrels" :key="squirrel.name" :squirrel="squirrels" />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const squirrel = ref('')

async function getData() {
  let result = await fetch(`https://data.cityofnewyork.us/resource/vfnx-vebw.json/`)
  let data = await result.json()
  squirrel.value = data
}

onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped></style>
