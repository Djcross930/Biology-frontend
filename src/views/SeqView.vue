<script>
import axios from "axios";
export default {
  data: function () {
    return {
      gene: "",
      geneInfo: {},
      geneSequence: {},
      genes: []
    };
  },
  created: function () {
    this.userGenes()
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
    },
    userGenes: function () {
      axios.get("/genes.json",).then(response => {
        this.genes = response.data
        console.log(response.data)
      })
    }
  }
};
</script>
  
<template>
  <h1> Sequence Explorer </h1>
  <h5>Search a gene using it's common name.</h5>
  <input type="text" v-model="this.gene"> <button class="btn btn-primary" v-on:click="searchGene()">Search</button>
  <div class="dropdown">
    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton"
      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Previous Genes
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a v-for="gen in genes" class=" dropdown-item" v-bind:href="`/genes/${gen.id}`">{{gen.common_name}}</a>
    </div>


  </div>
  <div id="myDIV" style="display:none">
    <h1>{{ this.geneInfo.common_name }}</h1>
    <h1> <b>Amino Acid Sequence: 5'→3' Direction</b></h1>
    <!-- <p> {{ this.geneInfo.amino_acid_sequence }} </p> -->
    <!-- <input type="text" v-model="this.geneInfo.amino_acid_sequence" style="height:120px; width:200px;"> -->
    <textarea name="Text1" cols="110" rows="4">{{ this.geneInfo.amino_acid_sequence }}</textarea>
    <h1> <b>Original Coding Sequence</b></h1>
    <textarea name="Text1" cols="110" rows="9">{{ this.geneInfo.cds_sequence }}</textarea>
    <br />
    <a class="btn btn-primary" v-bind:href="`/genes/${geneInfo.id}`"> See More </a>
  </div>

  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>