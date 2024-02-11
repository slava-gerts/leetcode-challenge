export function removeElement(array, val) {
  let result = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== val) {
      array[result] = array[i]
      result++
    }
  }

  return result
}