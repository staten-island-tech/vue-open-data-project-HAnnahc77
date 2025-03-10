<template>
  <div>
    <!-- Embed Script for Socrata Visualization -->
    <script
      type="text/javascript"
      charset="UTF-8"
      data-locale="en"
      data-socrata-domain="data.cityofnewyork.us"
      src="https://data.cityofnewyork.us/component/visualization/v1/socrata-visualizations-loader.js"
    ></script>

    <a
      class="socrata-visualization-embed"
      data-embed-version="1"
      data-height="600"
      data-socrata-domain="data.cityofnewyork.us"
      data-vizcan-uid="ghyh-vf8r"
      data-vif='{"configuration":{"viewSourceDataLink":true,"showOtherCategory":true,"showValueLabelsAsPercent":false,"showValueLabels":true},"series":[{"unit":{"other":"Squirrels","one":"Squirrel"},"color":{"secondary":"#e55100","highlight":"#cccccc","palette":"custom","customPalette":{"primary_fur_color":{"Gray":{"color":"#cccccc","index":0,"label":"Gray"},"Black":{"color":"#252525","index":2,"label":"Black"},"Cinnamon":{"color":"#a33200","index":1,"label":"Cinnamon"},"(No value)":{"color":"#b5e3e2","index":3,"label":"(No value)"}}},"primary":"#3f51b5"},"showLegend":true,"type":"pieChart","dataSource":{"measure":{"aggregationFunction":"count"},"limit":12,"orderBy":{"parameter":"measure","sort":"desc"},"type":"socrata.soql","datasetUid":"vfnx-vebw","dimension":{"columnName":"primary_fur_color","aggregationFunction":null},"filters":[]},"label":null}],"format":{"type":"visualization_interchange_format","version":8},"description":"","id":"1f90bd40-558d-4df7-b6cc-0cb59a2eaa09","title":"Primary Fur Color"}'
      data-width="800"
      href="https://data.cityofnewyork.us/Environment/2018-Central-Park-Squirrel-Census-Squirrel-Data/vfnx-vebw?referrer=embed"
      rel="external"
      target="_blank"
      >View the data</a
    >
  </div>
</template>

<script>
export default {
  name: 'SquirrelVisualization',
}
</script>
