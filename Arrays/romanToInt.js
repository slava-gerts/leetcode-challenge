const charToDigit = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

export function romanToInt(s) {
  let result = 0
  for (let i = 0; i < s.length; i++) {
      if (charToDigit[s[i]] >= charToDigit[s[i+1]] || 0) {
          result += charToDigit[s[i]]
      } else {
          result -= charToDigit[s[i]]
      }
  }

  return result
}