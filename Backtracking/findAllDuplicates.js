export function findAllDuplicates(nums) {
  const result = []

  for (let i = 0; i < nums.length; i++) {
    const position = Math.abs(nums[i]) - 1
    if (nums[position] < 0) result.push(Math.abs(nums[i]))
    else nums[position] *= -1
  }

  return result
}