export function searchInsert(nums, target) {
  if (nums.length === 0) return 0

  let low = 0
  let high = nums.length
  while (low < high) {
    const mid = Math.floor((low + high) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      high = mid
    } else {
      low = mid + 1
    }
  }

  return low
}