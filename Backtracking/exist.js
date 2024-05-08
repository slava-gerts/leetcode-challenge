export function exist(board, word) {
  const rows = board.length
  const cols = board[0].length
  const visited = new Array(rows).fill().map(() => new Array(cols).fill(false))

  function backtrack(row, col, index) {
    if (index === word.length) return true
    if (row < 0 || col < 0 || row >= rows || col >= cols) return false
    if (visited[row][col] || board[row][col] !== word[index]) return false

    visited[row][col] = true

    const result = (
      backtrack(row + 1, col, index + 1) ||
      backtrack(row - 1, col, index + 1) ||
      backtrack(row, col + 1, index + 1) ||
      backtrack(row, col - 1, index + 1)
    )

    visited[row][col] = false

    return result
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (backtrack(row, col, 0)) return true
    }
  }

  return false
}