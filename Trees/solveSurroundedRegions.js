export function solveSurroundedRegions(board) {
  for (let row = 0; row < board.length; row++) {
      for (let column = 0; column < board[row].length; column++) {
          if (board[row][column] === 'O' && isBorder(board, row, column)) dfs(board, row, column)
      }
  }

  for (let row = 0; row < board.length; row++) {
      for (let column = 0; column < board[row].length; column++) {
          if (board[row][column] === 'Visited') {
              board[row][column] = 'O'
          } else {
              board[row][column] = 'X'
          }
      }
  }
};

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
]

const dfs = (board, row, column) => {
  if (isOutside(board, row, column) || board[row][column] !== 'O') return

  board[row][column] = 'Visited'

  for (let [rowIndex, colIndex] of directions) {
      dfs(board, row + rowIndex, column + colIndex)
  }
}

const isOutside = (board, row, column) => {
  return row < 0 || column < 0 || row > board.length - 1 || column > board[row].length - 1
}

const isBorder = (board, row, column) => {
    return row === 0 || column === 0 || row === board.length - 1 || column === board[row].length - 1
}