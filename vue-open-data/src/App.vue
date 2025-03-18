<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1>2018 Central Park Squirrel Census</h1>
  <header>
    <div class="navs">
      <nav>
        <RouterLink to="/">Squirrel Data</RouterLink>
        <RouterLink to="/chartOne">Primary Fur Color Chart</RouterLink>
        <RouterLink to="/chartTwo">Chart 2</RouterLink>
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
  padding: 10px 0; /* Optional: Adds some spacing above and below the nav */
}

.navs {
  display: flex; /* Use flexbox */
  justify-content: space-evenly; /* Distribute items evenly including space between them */
  align-items: center; /* Center items vertically */
  width: 100%; /* Ensure the navigation container takes full width */
}

nav a {
  text-decoration: none; /* Remove underline from the links */
  color: #000; /* Set the link color */
  padding: 10px 20px; /* Optional: Adds padding around the links */
  border-radius: 4px; /* Optional: Gives the links rounded corners */
}

nav a:hover {
  background-color: #f0f0f0; /* Optional: Adds a hover effect */
}
</style>
