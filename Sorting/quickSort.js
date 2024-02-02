export function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

export function quickSort(arr) {
  if (arr.length < 2) return arr

  const pivot = randomInteger(0, arr.length - 1)

  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (i === pivot) continue

    if (arr[i] < arr[pivot]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(arr[pivot], quickSort(right))
}