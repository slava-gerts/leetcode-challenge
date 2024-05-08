export function letterCombinations(digits) {
  if (!digits) return []

  const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }

  const res = []

  const backtrack = (index, comb) => {
    if (index === digits.length) {
      res.push(comb)
      return
    }

    for (let letter of digitToLetters[digits[index]]) {
      backtrack(index + 1, comb + letter)
    }
  }

  backtrack(0, '')

  return res
}