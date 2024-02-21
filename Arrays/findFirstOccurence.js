export function findFirstOccurence(haystack, needle) {
  if (haystack.length < needle.length) return -1

  let startIndex = 0
  for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] !== needle[i - startIndex]) {
          i = startIndex
          startIndex = i + 1
      }

      if (i - startIndex === needle.length - 1) return startIndex
  }

  return -1
}