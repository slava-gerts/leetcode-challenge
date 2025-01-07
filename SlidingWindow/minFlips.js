export function minFlips(s) {
  const length = s.length
  const doubleString = s + s

  let template1 = '', template2 = ''
  for (let i = 0; i < doubleString.length; i++) {
    template1 += i % 2 ? '0' : '1'
    template2 += i % 2 ? '1' : '0'
  }

  let minFlips = Infinity
  let diff1 = 0, diff2 = 0
  for (let i = 0; i < doubleString.length; i++) {
    if (doubleString[i] !== template1[i]) diff1++
    if (doubleString[i] !== template2[i]) diff2++

    if (i >= length) {
      if (doubleString[i - length] !== template1[i - length]) diff1--
      if (doubleString[i - length] !== template2[i - length]) diff2--
    }

    if (i >= length - 1) {
      minFlips = Math.min(minFlips, diff1, diff2)
    }
  }

  return minFlips
}