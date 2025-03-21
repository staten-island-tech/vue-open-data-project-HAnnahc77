<template>
  <main>
    <h2>Squirrel Habits Chart</h2>
    <div class="polar-area-chart-container">
      <PolarAreaChart
        v-if="chartData.labels.length > 0"
        :chartData="chartData"
        :chartOptions="chartOptions"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PolarAreaChart from '../components/PolarAreaChart.vue'

const chartData = ref({
  labels: [], // Will be filled with activity types (e.g., running, chasing)
  datasets: [
    {
      data: [], // Will be filled with the count of each activity
      backgroundColor: [
        '#FF5733',
        '#33FF57',
        '#3357FF',
        '#FF33A8',
        '#FFBD33',
        '#33FFF0',
        '#FF5733',
        '#FF99FF',
        '#FF9933',
        '#FF33FF',
      ], // Colors for each segment
    },
  ],
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
})

const url = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json/'

async function getData(url) {
  try {
    const result = await fetch(url)
    const data = await result.json()
    console.log(data) // Log the raw data to check the structure
    processSquirrelData(data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

function processSquirrelData(data) {
  // Initialize activity counts
  const activityCounts = {
    running: 0,
    chasing: 0,
    climbing: 0,
    eating: 0,
    foraging: 0,
    kucks: 0,
    quaas: 0,
    moans: 0,
    tail_flags: 0,
    tail_twitches: 0,
    approaches: 0,
    indifferent: 0,
    runs_from: 0,
  }

  // Loop through the data to count each activity
  data.forEach((squirrel) => {
    // For each activity, increment the count if it's marked true
    for (const activity in activityCounts) {
      if (squirrel[activity] === true) {
        activityCounts[activity] += 1
      }
    }
  })

  // Log activity counts for debugging
  console.log('Activity Counts:', activityCounts)

  // Prepare chart data
  chartData.value.labels = Object.keys(activityCounts)
  chartData.value.datasets[0].data = Object.values(activityCounts)
}

onMounted(() => {
  getData(url)
})
</script>

<style scoped>
.polar-area-chart-container {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}

h2 {
  text-align: center;
}
</style>
