export function isPalindrome(s) {
  const newS = s.replace(/[^\w]/g, '').toLowerCase()
  const ex = s.replace(/[^\w]|_/g, '').toLowerCase()
  if (newS.length < 2) return true

  for (let i = 0, j = newS.length - 1; i < j; i++, j--) {
    if (newS[i] !== newS[j]) return false
  }

  return true
}