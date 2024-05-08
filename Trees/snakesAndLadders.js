export function snakesAndLadders(board) {
  const n = board.length;
  const queue = [{ position: 1, moves: 0 }];
  const visited = new Set();

  while (queue.length > 0) {
    const { position, moves } = queue.shift();
    if (position === n * n) {
      return moves;
    }

    for (let i = 1; i <= 6; i++) {
      const nextPosition = position + i;
      if (nextPosition > n * n) {
        break;
      }

      const [row, col] = getPositionCoordinates(nextPosition, n);
      const nextValue = board[row][col] === -1 ? nextPosition : board[row][col];

      if (!visited.has(nextValue)) {
        visited.add(nextValue);
        queue.push({ position: nextValue, moves: moves + 1 });
      }
    }
  }

  return -1; // If no path is found
}

function getPositionCoordinates(position, n) {
  const row = Math.floor((position - 1) / n);
  const col = (position - 1) % n;
  const isEvenRow = row % 2 === 0;
  const colInverted = isEvenRow ? col : n - col - 1;
  const rowInverted = n - row - 1;
  return [rowInverted, colInverted];
}