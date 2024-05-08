export function minMutations(startGene, endGene, bank) {
  // Create a set to store the genes in the bank
  const bankSet = new Set(bank);

  // Create a queue to perform breadth-first search
  const queue = [];
  queue.push([startGene, 0]); // Start with the startGene and 0 mutations

  // Perform breadth-first search
  while (queue.length > 0) {
    const [gene, mutations] = queue.shift();

    // If the current gene is the endGene, return the number of mutations
    if (gene === endGene) {
      return mutations;
    }

    // Iterate through each character of the gene
    for (let i = 0; i < gene.length; i++) {
      // Try replacing the current character with each possible nucleotide
      for (const nucleotide of ['A', 'C', 'G', 'T']) {
        // Skip if the current character is the same as the nucleotide
        if (gene[i] === nucleotide) {
          continue;
        }

        // Create a new gene by replacing the character
        const newGene = gene.slice(0, i) + nucleotide + gene.slice(i + 1);

        // If the new gene is in the bank, add it to the queue
        if (bankSet.has(newGene)) {
          queue.push([newGene, mutations + 1]);
          bankSet.delete(newGene); // Remove the gene from the bank to avoid revisiting
        }
      }
    }
  }

  // If no mutations are possible, return -1
  return -1;
}