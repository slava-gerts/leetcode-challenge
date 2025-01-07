export function isNotEqualAverageNeighbours(nums) {
  nums.sort((a, b) => a - b)

  const length = nums.length
  const result = new Array(nums.length)
  let left = 0
  let right = Math.floor((nums.length + 1) / 2)

  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      result[i] = nums[left++]
    } else {
      result[i] = nums[right++]
    }
  }

  return result
}