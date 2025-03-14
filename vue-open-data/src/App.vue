<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1>2018 Central Park Squirrel Census</h1>
  <header>
    <nav>
      <RouterLink to="/">Squirrel Data</RouterLink>
      <RouterLink to="/about">Charts</RouterLink>
      <RouterLink to="/charttwo">Chart 2</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
</style>
