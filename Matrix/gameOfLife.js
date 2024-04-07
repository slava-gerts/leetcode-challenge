const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

export function gameOfLife(board) {
  const numRows = board.length;
  const numCols = board[0].length;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      let neighbors = 0;
      for (let [dx, dy] of dirs) {
        const newRow = row + dx;
        const newCol = col + dy;
        if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
          const cell = board[newRow][newCol];
          if (cell === 1 || cell === 3) {
            neighbors++;
          }
        }
      }

      const currentCell = board[row][col];
      const isAlive = currentCell === 1 || currentCell === 3;

      if (!isAlive && neighbors === 3) {
        board[row][col] = -1;
      } else if (isAlive && (neighbors < 2 || neighbors > 3)) {
        board[row][col] = 3;
      }
    }
  }

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (board[row][col] === 3) {
        board[row][col] = 0;
      } else if (board[row][col] === -1) {
        board[row][col] = 1;
      }
    }
  }

  return board;
}



