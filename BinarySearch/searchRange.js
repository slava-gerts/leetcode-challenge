export function searchRange(nums, target) {
  const findFirst = () => {
      let index = -1
      let start = 0
      let end = nums.length - 1

      while (start <= end) {
          const mid = Math.floor((start + end) / 2)

          if (nums[mid] >= target) {
              end = mid - 1
          } else {
              start = mid + 1
          }

          if (nums[mid] === target) index = mid
      }

      return index
  }

  const minIndex = findFirst()
  if (minIndex === -1) return minIndex

  let maxIndex = minIndex
  while (nums[maxIndex + 1] === target) maxIndex++

  return [minIndex, maxIndex]
}