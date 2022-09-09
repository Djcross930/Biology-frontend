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
    <div class="card">
      <div class="card-header">
        <h3> Welcome to geneViewer</h3>
      </div>
      <p> Visit the Chromosome Explorer tab to get detailed information on every unique human chromosome!</p>
      <p> If you find a gene you're interested in, enter it's common name into the sequence explorer to get an in depth
        look at the gene. </p>
    </div>
    <br />
    <div class="card">
      <div class="card-header">
        <h4> Background Information</h4>
      </div>
      <p> You'll encounter a lot of different gentic information in this app. In order to make the associations a bit
        clearer, this list helps breaks down that information. </p>
      <ul class="list-group">
        <li class="list-group-item"><b>Protein</b></li>
        <li class="list-group-item">A protein is made up of amino-acids chained together (typically between 50 and 2,000
          amino acids long). A gene typically holds the genetic information for at least one protein. Proteins provide a
          very diverse range of
          biological functions. </li>
        <li class="list-group-item"><b>Amino Acid</b></li>
        <li class="list-group-item">An amino acid is encoded by 3 specific and consecutive nucleotide bases. There are
          64 (4^3) possible nucleotide combinations , and they encode 20 total amino acids. This means that most amino
          acids
          are encoded by multiple nucleotide combinations.</li>
        <li class="list-group-item"><b>Nucleotide</b></li>
        <li class="list-group-item">The structural unit of DNA and RNA. In DNA, the bases are A, T, G, and C. A bonds to
          T, and G bonds to C. In RNA, the T base is replaced by U instead.</li>
        <li class="list-group-item"><b> Start Codon </b></li>
        <li class="list-group-item">A start codon indicates where the translation of amino acids begin for the sequence.
          It
          is encoded
          by 3 specific and consecutive nucleotide bases. In mammals, the start codon will almost always be ATG(AUG for
          mRNA), which
          codes for the amino acid Methionine(M).</li>
        <li class="list-group-item"><b> Stop Codon </b></li>
        <li class="list-group-item">A stop codon indicates where the translation of amino acids ends on a sequence. The
          three stop codons are: TAG(UAG), TAA(UAA), and TGA(UGA).</li>
        <li class="list-group-item"><b> GC Content</b></li>
        <li class="list-group-item">This refers to the ratio of guanine & cytosine in a specific sequence. Due to
          nucleic
          base pair bonding, C and G content is always equal, and A and T(or U) content is also always equal. To get the
          AT content, simply do: (100 - (GC Content))</li>
      </ul>
    </div>
  </div>
</template>

<style>

</style>
