<script>
import axios from "axios";
export default {
  data: function () {
    return {
      gene: "",
      geneInfo: {}
    };
  },
  created: function () {

  },
  methods: {
    searchGene: function () {
      axios.post("/genes.json", { common_name: this.gene }).then(response => {
        console.log(response.data)
        this.geneInfo = response.data;
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      })
    }
  }
};
</script>
  
<template>
  <h1> Gene Explorer </h1>
  <p>Search a gene using it's common name.</p>
  <input type="text" v-model="this.gene"> <button v-on:click="searchGene()">Search</button>
  <div id="myDIV" style="display:none">
    <h1>{{ this.geneInfo.common_name }}</h1>
    <p> <b>Amino Acid Sequence: 5'→3' Direction</b></p>
    <p> {{ this.geneInfo.amino_acid_sequence }} </p>
    <p> <b>Original Coding Sequence</b></p>
    <p> {{ this.geneInfo.cds_sequence }} </p>
    <a v-bind:href="`/genes/${geneInfo.id}`"> See More </a>
  </div>
</template>