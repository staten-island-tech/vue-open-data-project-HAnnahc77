<template>
    <main>
        <h2>Primary Fur Color</h2>
      <PieChart
        v-if="chartData.labels.length > 0"
        :chartData="chartData"
        :chartOptions="chartOptions"
      />
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
      }
    ]
  })
  
  const chartOptions = ref({
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    }
  })
  
  const url = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json/'
  
  async function getData(url) {
    const result = await fetch(url)
    const data = await result.json()
    processSquirrelData(data)
  }
  
  function processSquirrelData(data) {
    const furColorCount = {}
  
    data.forEach(squirrel => {
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
  #my-pie-chart {
    width: 100%;
    height: 300px;
  }
  </style>