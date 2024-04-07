export function minWindow(s, t) {
  if (t.length > s.length) return ''

  const neededChars = {}
  for (let char of t) {
    neededChars[char] = (neededChars[char] || 0) + 1
  }

  let leftPointer = 0
  let rightPointer = 0
  let neededLength = Object.keys(neededChars).length

  let window = ''
  while (rightPointer < s.length) {
    const currentChar = s[rightPointer]
    neededChars[currentChar]--
    if (neededChars[currentChar] === 0) neededLength--

    while (neededLength === 0) {
      if (!window || window.length > rightPointer - leftPointer + 1) {
        window = s.slice(leftPointer, rightPointer + 1)
      }

      const startChar = s[leftPointer]
      if (neededChars[startChar] === 0) neededLength++

      neededChars[startChar]++
      leftPointer++
    }

    rightPointer++
  }

  return window
}