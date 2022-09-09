<script>
import axios from "axios";

export default {
  data: function () {
    return {
      gene: {}
    };
  },
  created: function () {
    this.getGene()
  },
  mounted: function () {
    this.getGene()
  },
  methods: {
    getGene: function () {
      axios.get("/genes/" + this.$route.params.id + ".json").then((response) => {
        console.log(response.data)
        this.gene = response.data
        this.showGraph()
      });
    },
    showGraph: function () {
      const chart = Highcharts.chart('container', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Gene Base Pair Content'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        series: [{
          name: 'Base Pair Content',
          colorByPoint: true,
          data: [{
            name: 'g/c Content',
            y: this.gene.g_c_content,
            sliced: true,
            selected: true
          }, {
            name: 'a/t Content',
            y: this.gene.a_t_content
          }]
        }]
      });
    }
  }
};

</script>


<template>
  <div class="genes-show">
    <p> {{ this.gene.id }} </p>
    <p>{{this.gene.g_c_content}}</p>
    <div id="container" style="width:100%; height:400px;"></div>
    <router-link to="/seq">Back to all genes</router-link>

  </div>
</template>