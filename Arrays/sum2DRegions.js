export const NumMatrix = function (matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    this.prefix = []
    return
  }

  const m = matrix.length
  const n = matrix[0].length
  this.prefix = Array.from({length: m + 1}, () => Array(n + 1).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      this.prefix[i + 1][j + 1] = matrix[i][j]
                                  + this.prefix[i + 1][j]
                                  + this.prefix[i][j + 1]
                                  - this.prefix[i][j]
    }
  }
}

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return this.prefix[row2 + 1][col2 + 1]
        -this.prefix[row2 + 1][col1]
        -this.prefix[row1][col2 + 1]
        +this.prefix[row1][col1]
}

const matrix = [[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]
const numMatrix = new NumMatrix(matrix)
console.log(numMatrix.sumRegion(2, 1, 4, 3))