export function hIndex(citations) {
  citations.sort((a, b) => b - a)

  let h = 0
  while (citations[h] > h) h++

  return h
}