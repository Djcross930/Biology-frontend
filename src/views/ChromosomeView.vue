<script>
export default {
  data: function () {
    return {
      message: ""
    };
  },
  created: function () {
  },
  methods: {

  }
};
</script>
<template>
  <div class="about">
    <h1>The NCBI database has information on every single gene in our bodies, down to the base pair level.</h1>
    <p> Humans have 22 chromosome pairs, but if you count the two individual sex chromosomes as unique, it comes out to
      24 total. </p>
    <p> Select a chromosome from the list below to get a closer look at what makes you, <b>you.</b></p>
    <p> First time using the Sviewer? <a href="https://www.ncbi.nlm.nih.gov/tools/sviewer/">
        NCBI </a> provides excellent documentation on how to us it.</p>
    <p><b>Select a chromosome from the list:</b></p>
    <br />

    <select onchange="loadSV(event.target.value)">
      <option value="">-</option>
      <option value="NC_000001">Chromosome 1</option>
      <option value="NC_000002">Chromosome 2</option>
      <option value="NC_000003">Chromosome 3</option>
      <option value="NC_000004">Chromosome 4</option>
      <option value="NC_000005">Chromosome 5</option>
      <option value="NC_000006">Chromosome 6</option>
      <option value="NC_000007">Chromosome 7</option>
      <option value="NC_000008">Chromosome 8</option>
      <option value="NC_000009">Chromosome 9</option>
      <option value="NC_000010">Chromosome 10</option>
      <option value="NC_000011">Chromosome 11</option>
      <option value="NC_000012">Chromosome 12</option>
      <option value="NC_000013">Chromosome 13</option>
      <option value="NC_000014">Chromosome 14</option>
      <option value="NC_000015">Chromosome 15</option>
      <option value="NC_000016">Chromosome 16</option>
      <option value="NC_000017">Chromosome 17</option>
      <option value="NC_000018">Chromosome 18</option>
      <option value="NC_000019">Chromosome 19</option>
      <option value="NC_000020">Chromosome 20</option>
      <option value="NC_000021">Chromosome 21</option>
      <option value="NC_000022">Chromosome 22</option>
      <option value="NC_000023">Chromosome 23</option>
      <option value="NC_000024">Chromosome 24</option>
    </select>

    <br />

    <div id="mySeqViewer1">
    </div>
  </div>
</template>
