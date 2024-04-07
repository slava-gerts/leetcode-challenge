export function summaryRanges(nums) {
  if (!nums || nums.length === 0) return []
  if (nums.length === 1) return [`${nums[0]}`]

  const output = []

  let minVal = nums[0]
  for (let i = 1; i < nums.length; i++) {
      if ((nums[i] !== nums[i - 1] + 1) || i === nums.length) {
          output.push(minVal === nums[i - 1] ? `${minVal}` : `${minVal}->${nums[i - 1]}`)
          minVal = nums[i]
      }
  }

  return output
};