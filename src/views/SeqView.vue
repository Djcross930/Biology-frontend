<script>
import axios from "axios";
export default {
  data: function () {
    return {
      gene: "",
      geneInfo: {},
      geneSequence: {}
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
  <h1> Sequence Explorer </h1>
  <p>Search a gene using it's common name.</p>
  <input type="text" v-model="this.gene"> <button v-on:click="searchGene()">Search</button>
  <div id="myDIV" style="display:none">
    <h1>{{ this.geneInfo.common_name }}</h1>
    <h1> <b>Amino Acid Sequence: 5'→3' Direction</b></h1>
    <!-- <p> {{ this.geneInfo.amino_acid_sequence }} </p> -->
    <!-- <input type="text" v-model="this.geneInfo.amino_acid_sequence" style="height:120px; width:200px;"> -->
    <textarea name="Text1" cols="110" rows="4">{{ this.geneInfo.amino_acid_sequence }}</textarea>
    <h1> <b>Original Coding Sequence</b></h1>
    <textarea name="Text1" cols="110" rows="9">{{ this.geneInfo.cds_sequence }}</textarea>
    <br />
    <a v-bind:href="`/genes/${geneInfo.id}`"> See More </a>
  </div>
</template>