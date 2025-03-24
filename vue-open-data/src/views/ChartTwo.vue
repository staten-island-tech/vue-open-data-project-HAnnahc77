<template>
  <main>
    <div class="container">
    <h2>Squrriel Activity Analysis</h2>
    <div class="polar-area-chart-container">
      <PolarAreaChart
        v-if="chartData.labels.length > 0"
        :chartData="chartData"
        :chartOptions="chartOptions"
      />
    </div></div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PolarAreaChart from '../components/PolarAreaChart.vue'

const chartData = ref({
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: [
        '#4E9F3D',
        '#6C8EBF',
        '#F9A825',
        '#F44336',
        '#FF9800',
        '#9C27B0',
        '#00BCD4',
        '#8BC34A',
        '#FF5722',
        '#795548',
      ],
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
    processSquirrelData(data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

function processSquirrelData(data) {
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

  data.forEach((squirrel) => {
    for (const activity in activityCounts) {
      if (squirrel[activity] === true) {
        activityCounts[activity] += 1
      }
    }
  })

  console.log('Activity Counts:', activityCounts)

  chartData.value.labels = Object.keys(activityCounts)
  chartData.value.datasets[0].data = Object.values(activityCounts)
}

onMounted(() => {
  getData(url)
})
</script>

<style scoped>

main {
  height: 100vh;
}
.polar-area-chart-container {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}

h2 {
  text-align: center;
}
</style>
