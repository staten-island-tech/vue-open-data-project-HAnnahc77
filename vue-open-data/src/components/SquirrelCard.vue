<template>
  <div class="squirrel-card">
    <h2>ID: {{ squirrel.unique_squirrel_id }}</h2>
    <h2>Color: {{ squirrel.primary_fur_color }}</h2>
    <h2>Location: ({{ squirrel.x }} , {{ squirrel.y }})</h2>
  </div>
</template>

<script setup>
defineProps({
  squirrel: Object,
})
</script>

<style scoped>
.squirrel-card {
  border: 1px solid #000000;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  text-align: center;
  width: 300px;
}
</style>
