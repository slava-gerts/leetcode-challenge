export function numIslands(grid) {
  let numIslands = 0

  for (let row = 0; row < grid.length; row++) {
      for (let column = 0; column < grid[row].length; column++) {
          if (grid[row][column] === '1') {
              numIslands++
              dfs(grid, row, column)
          }
      }
  }

  return numIslands
};

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0]
]

const dfs = (grid, row, column) => {
  if (isOutside(grid, row, column) || grid[row][column] === '0') return
      
  grid[row][column] = '0'

  for (let [rowIndex, colIndex] of directions) {
      dfs(grid, row + rowIndex, column + colIndex)
  }
}

const isOutside = (grid, row, column) => {
  return row < 0 || column < 0 || row > grid.length - 1 || column > grid[row].length - 1
}