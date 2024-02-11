export function findMaximumValue(array) {
  if (array.length === 0) return 0

  let previousMin = array[0]
  let previousMax = array[0]

  let mins = []
  let maxs = []

  for (let i = 1; i < array.length; i++) {
    mins[0] = previousMin - array[i]
    maxs[0] = previousMax - array[i]

    mins[1] = previousMin + array[i]
    maxs[1] = previousMax + array[i]

    mins[2] = previousMin * array[i]
    maxs[2] = previousMax * array[i]

    mins[3] = previousMin / array[i]
    maxs[3] = previousMax / array[i]

    previousMin = Math.min(Math.min(...mins), Math.min(...maxs))
    previousMax = Math.max(Math.max(...maxs), Math.max(...mins))
  }

  return previousMax
}