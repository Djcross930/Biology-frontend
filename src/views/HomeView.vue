<script>
export default {
  data: function () {
    return {
      message: "Welcome to geneViewer",
    };
  },
  created: function () { },
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p> Visit the Chromosome Explorer tab to get detailed information on every unique human chromosome!</p>
    <p> If you find a gene you're interested in, enter it's common name into the sequence explorer to get an in depth
      look at the gene. </p>
  </div>
</template>

<style>

</style>
