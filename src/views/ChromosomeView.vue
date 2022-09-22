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
    <div class="mx-auto" style="width: 1250px;">
      <div class="card">
        <div class="card-header">
          <h1>Chromosome Explorer</h1>
        </div>
        <h2>The NCBI database has information on every single human gene, down to the base pair level.</h2>
        <h6> Humans normally have a total of 23 chromosome pairs. The sex chromosomes(X and Y) are both unique, so the
          total comes
          out to 24. </h6>
        <h6> Select a chromosome from the list below to get a closer look at what makes you, <b>you.</b></h6>
        <h6> First time using the Sviewer? <a href="https://www.ncbi.nlm.nih.gov/tools/sviewer/">
            NCBI </a> provides excellent documentation on how to us it.</h6>
        <h6><b>Select a chromosome from the list:</b></h6>
        <br />
      </div>
    </div>
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
