export function isSubsequence(s, t) {
  if (s === t) return true
  if (s.length > t.length) return false

  let sIndex = 0
  for (let i = 0; i < t.length; i++) {
    if (s[sIndex] === t[i]) sIndex++

    if (sIndex === s.length) return true
  }

  return false
}