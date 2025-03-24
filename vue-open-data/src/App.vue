<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1>2018 Central Park Squirrel Census Data</h1>
  <header>
    <div class="navs">
      <nav>
        <RouterLink to="/">Squirrel Data</RouterLink>
        <RouterLink to="/chartOne">Squrriel Fur Color Distribution Chart</RouterLink>
        <RouterLink to="/chartTwo">Squrriel Activity Analysis Chart</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
h1 {
  text-align: center;
}

header {
  padding: 10px 0; 
}

.navs {
  display: flex; 
  justify-content: space-evenly; 
  align-items: center; 
  width: 100%; 
}

nav a {
  color: #000000; 
  padding: 10px 20px; 
  border-radius: 4px; 
}

nav a:hover{
color: grey;
}
</style>
