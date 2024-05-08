export const findWords = (board, words) => {
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const res = new Set();

  const buildTrie = () => {
    const root = {};
    for (const word of words) {
      let node = root;
      for (const char of word) {
        if (!node[char]) node[char] = {};
        node = node[char];
      }
      node.word = word;
    }
    return root;
  };

  const search = (node, x, y) => {
    if (node.word) {
      res.add(node.word);
      node.word = null; // make sure only print one time for each word
    }

    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return;
    if (!node[board[x][y]]) return;

    const char = board[x][y];
    board[x][y] = '#'; // Mark visited
    for (const [dx, dy] of directions) {
      const i = x + dx;
      const j = y + dy;
      search(node[char], i, j);
    }
    board[x][y] = char; // Reset
  };

  const root = buildTrie();
  const numRows = board.length;
  const numCols = board[0].length;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      search(root, i, j);
    }
  }
  return Array.from(res);
};