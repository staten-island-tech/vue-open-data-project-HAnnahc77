<template>
  <main>
    <h2>Squrriel Fur Color Distribution</h2>
    <div class="pie-chart-container">
      <PieChart
        v-if="chartData.labels.length > 0"
        :chartData="chartData"
        :chartOptions="chartOptions"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PieChart from '../components/PieChart.vue'

const chartData = ref({
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: ['#808080', '#D2691E', '#000000'],
    },
  ],
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
  },
})

const url = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json/'

async function getData(url) {
  const result = await fetch(url)
  const data = await result.json()
  processSquirrelData(data)
}

function processSquirrelData(data) {
  const furColorCount = {}

  data.forEach((squirrel) => {
    const color = squirrel.primary_fur_color
    if (color) {
      furColorCount[color] = (furColorCount[color] || 0) + 1
    }
  })

  chartData.value.labels = Object.keys(furColorCount)
  chartData.value.datasets[0].data = Object.values(furColorCount)
}

onMounted(() => {
  getData(url)
})
</script>

<style scoped>
main {
height: 100vh;
}
.pie-chart-container {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}

h2 {
  text-align: center;
}
</style>
