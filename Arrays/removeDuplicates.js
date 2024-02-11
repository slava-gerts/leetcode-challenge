export function removeDuplicates(array) {
  let k = 0

  for (let i = 1; i < array.length; i++) {
    if (array[k] !== array[i]) {
      k++
      array[k] = array[i]
    }
  }

  return k + 1
}