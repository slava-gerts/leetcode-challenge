export function firstMissingPositive(nums) {
  let index = 0

  while (index < nums.length) {
    const correctIndex = nums[index] - 1
    if (nums[index] > 0 && nums[index] <= nums.length && nums[index] !== nums[correctIndex]) {
      [nums[correctIndex], nums[index]] = [nums[index], nums[correctIndex]]
    } else {
      index++
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1
    }
  }

  return nums.length + 1
}