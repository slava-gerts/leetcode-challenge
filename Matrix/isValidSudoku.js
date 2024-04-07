export function isValidSudoku(board) {
  const set = new Set()

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j]
      if (cell === '.') continue

      const row = `row: ${i} has value: ${cell}`
      const column = `column: ${j} has vvalue: ${cell}`
      const boxNumber = 3 * Math.floor(i / 3) + Math(j / 3)
      const box = `box: ${boxNumber} has value: ${cell}`

      if (set.has(row) || set.has(column) || set.has(box)) return false

      set.add(row).add(column).add(box)
    }
  }

  return true
}