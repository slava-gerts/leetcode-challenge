export function lengthOfLongestSubstring(s) {
  if (!s) return 0
  if (s.length === 1) return 1

  let max = 0
  let leftPointer = 0

  const map = new Map()
  for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
          leftPointer = Math.max(map.get(s[i]), leftPointer)
      }

      map.set(s[i], i + 1)
      max = Math.max(max, i - leftPointer + 1)
  }

  return max
}