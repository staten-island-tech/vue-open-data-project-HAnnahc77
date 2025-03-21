<template>
  <PolarArea id="my-polar-area-chart" :options="chartOptions" :data="chartData" />
</template>

<script>
import { PolarArea } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale)

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

<style scoped>
/* Optionally, style the chart container */
#my-polar-area-chart {
  width: 100%;
  height: 400px;
}
</style>
