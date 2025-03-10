<template>
  <div class="squirrel-card">
    <h3>{{ squrriel.primary_fur_color }}</h3>
    <p>Location: {{ squirrel.x }} , {{ squirrel.y }}</p>
    <p>Color: {{ squirrel.unique_squirrel_id }}</p>
  </div>
</template>

<script setup>
defineProps({
  squirrel: Object,
})
</script>

<style scoped>
.squirrel-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
