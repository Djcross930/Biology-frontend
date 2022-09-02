<script>
import axios from "axios";
export default {
  data: function () {
    return {
      gene: "",
      geneId: "",
      sequence: {}
    };
  },
  created: function () {

  },
  methods: {
    searchGene: function () {
      axios.post("/genes", { common_name: this.gene }).then(response => {
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
  <div>
    <p> Temporary </p>
  </div>
</template>