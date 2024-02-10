export function rotateMatrix(matrix) {
  const newMatrix = matrix[0].map(() => [])

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const value = matrix[i][j]
      newMatrix[j][matrix.length - 1 - i] = value
    }
  }

  return newMatrix
}