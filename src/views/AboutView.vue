<template>
  <div class="about">
    <h1>The NCBI database has information on every single gene in our bodies, down to the base pair level.</h1>
    <h2>(Don't worry, there still some variation that inevitably sets you apart)</h2>
    Select a chromosome from the list:<br />

    <select onchange="loadSV(event.target.value);">
      <option value="">-</option>
      <option value="NC_000001">Chromosome 1</option>
      <option value="NC_000002">Chromosome 2</option>
      <option value="NC_000003">Chromosome 3</option>
      <option value="NC_000004">Chromosome 4</option>
      <option value="NC_000005">Chromosome 5</option>
      <option value="NC_000023">Chromosome 23</option>
    </select>

    <br />

    <div id="mySeqViewer1">
    </div>
  </div>
</template>
