export function mergeSort(array) {
  const merge = (leftAr, rightAr) => {
    const result = []
    while (leftAr.length && rightAr.length) {
      if (leftAr[0] > rightAr[0]) {
        result.push(rightAr.shift())
      } else {
        result.push(leftAr.shift())
      }
    }

    return [...result, ...leftAr, ...rightAr]
  }

  if (array.length < 2) return array

  const mid = Math.floor(array.length / 2)
  const leftAr = array.splice(0, mid)
  const rightAr = array.splice(mid)
  
  return merge(mergeSort(leftAr), mergeSort(rightAr))
}