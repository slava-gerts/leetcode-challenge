export function searchMatrix(matrix, target) {
  if (matrix.length === 0) return false;
  
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) return true;
    
    if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
}