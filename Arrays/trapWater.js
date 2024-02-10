export function trapWater(height) {
  let left = 0
  let right = height.length - 1

  let availableMax = 0
  let result = 0
  while (left < right) {
      availableMax = Math.max(availableMax, Math.min(height[left], height[right]))

      if (height[left] < height[right]) {
          result += Math.max(0, availableMax - height[left])
          left++
      } else {
          result += Math.max(0, availableMax - height[right])
          right--
      }
  }

  return result
}

export function trapWater2(height) {
  let leftHeight = height[0]
  let rightHeight = height[height.length - 1]

  let leftPos = 1
  let rightPos = height.length - 2

  let result = 0
  while (leftPos <= rightPos) {
    if (leftHeight < rightHeight) {
      result += Math.max(0, leftHeight - height[leftPos])
      leftHeight = Math.max(leftHeight, height[leftPos])
      leftPos++
    } else {
      result += Math.max(0, rightHeight - height[rightPos])
      rightHeight = Math.max(rightHeight, height[rightPos])
      rightPos--
    }
  }

  return result
}