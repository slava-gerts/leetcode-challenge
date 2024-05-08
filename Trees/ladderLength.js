export function ladderLength(beginWord, endWord, wordList) {
  // Create a set to store the words in the wordList
  const wordSet = new Set(wordList);

  // Create a queue to perform breadth-first search
  const queue = [];
  queue.push([beginWord, 1]); // Start with the beginWord and level 1

  // Perform breadth-first search
  while (queue.length > 0) {
    const [word, level] = queue.shift();

    // Check if we have reached the endWord
    if (word === endWord) {
      return level; // Return the level of transformation
    }

    // Generate all possible transformations of the current word
    for (let i = 0; i < word.length; i++) {
      for (let j = 97; j <= 122; j++) {
        const newWord = word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);

        // Check if the newWord is in the wordSet and not equal to the current word
        if (wordSet.has(newWord) && newWord !== word) {
          queue.push([newWord, level + 1]); // Add the newWord to the queue with the next level
          wordSet.delete(newWord); // Remove the newWord from the wordSet to avoid duplicates
        }
      }
    }
  }

  return 0; // If no transformation sequence is found, return 0
}

