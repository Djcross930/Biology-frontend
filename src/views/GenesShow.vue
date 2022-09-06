<script>
import axios from "axios";
export default {
  data: function () {
    return {
      gene: {},
    };
  },
  created: function () {
    axios.get("/genes/" + this.$route.params.id + ".json").then((response) => {
      console.log(response.data)
      this.gene = response.data
    });
  },
  methods: {},
};
</script>

<template>
  <div class="genes-show">
    <p> {{ this.gene.id }} </p>
    <router-link to="/seq">Back to all genes</router-link>
  </div>
</template>