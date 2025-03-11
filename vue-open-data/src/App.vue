<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1>2018 Central Park Squirrel Census</h1>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped></style>
