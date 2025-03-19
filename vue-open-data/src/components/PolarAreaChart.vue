<template>
  <PolarArea id="my-polar-area-chart" :options="chartOptions" :data="chartData" />
</template>

<script>
import { PolarArea } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PolarAreaElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, PolarAreaElement, CategoryScale, LinearScale)

export default {
  name: 'PolarAreaChart',
  components: { PolarArea },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
