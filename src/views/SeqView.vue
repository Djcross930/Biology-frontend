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
      })
    }
  }
};
</script>
  
<template>
  <h1> YO </h1>
  <p>{{ gene }}</p>
  <input type="text" v-model="this.gene"> <button v-on:click="searchGene()">Search</button>
  <!-- <div>
    <p> {{ this.geneInfo.sequence }} </p>
    <p> {{ this.geneInfo.amino_acid_sequence }} </p>
  </div> -->
</template>