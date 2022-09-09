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
    <h1> {{ this.gene.common_name }} </h1>
    <h4> <b>Amino Acid Sequence: 5'→3' Direction</b></h4>
    <textarea name="Text1" cols="110" rows="4">{{ this.gene.amino_acid_sequence }}</textarea>
    <!-- <p> {{ this.gene.amino_acid_sequence }} </p> -->
    <h4> <b>Original Coding Sequence</b></h4>
    <textarea name="Text1" cols="110" rows="9">{{ this.gene.cds_sequence }}</textarea>
    <!-- <p> {{ this.gene.cds_sequence }} </p> -->
    <h4> <b> Mature mRNA sequence</b></h4>
    <textarea name="Text1" cols="110" rows="9">{{ this.gene.mrna_sequence }}</textarea>
    <h4> <b>Start Codon:</b></h4>
    <p> {{ this.gene.start_codon }} </p>
    <h4> <b>Stop Codon:</b></h4>
    <p> {{ this.gene.stop_codon }} </p>
    <div id="container" style="width:100%; height:400px;"></div>
    <router-link to="/seq">Back to all gene viewer</router-link>

  </div>
</template>