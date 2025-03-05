<template>
  <div class="squirrel-card">
    <h3>{{ squirrel.name }}</h3>
    <p>Location: {{ squirrel.location }}</p>
    <p>Color: {{ squirrel.color }}</p>
    <!-- Add other details you want to display -->
  </div>
</template>

<script setup>
defineProps({
  squirrel: Object, // Define the prop for squirrel data
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
