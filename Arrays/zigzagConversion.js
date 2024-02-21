export function zigzagConversion(s, numRows) {
  // const arr = Array.from(new Array(numRows), () => [])

  // let rowIndex = -1
  // let colIndex = 0

  // let index = 0
  // let goDown = true
  // while (index < s.length) {
  //     if (goDown && rowIndex < numRows) {
  //       rowIndex++

  //       if (rowIndex === numRows - 1) goDown = false
  //     } else {
  //       rowIndex--
  //       colIndex++

  //       if (rowIndex === 0) goDown = true
  //     }

  //     arr[rowIndex][colIndex] = s[index]
  //     index++
  // }

  // for (let i = 0)

  if (numRows === 1) {
    return s;
  }

  const table = new Array(numRows).fill("");
  let isBeginning = true;
  let ptr = 0;

  for (let i = 0; i < s.length; i++) {
      if (ptr === 0) {
          isBeginning = true;
      }

      if (ptr === numRows - 1) {
          isBeginning = false;
      }

      if (ptr < numRows && isBeginning) {
          table[ptr] += s[i];
          ptr += 1;
      }

      if (!isBeginning) {
          table[ptr] += s[i];
          ptr -= 1;
      }
  }

  return table.join("");
}