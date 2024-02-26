export function minSubArrayLen(target, nums) {
  let minSub = Number.MAX_VALUE

  let currentSum = nums[0]
  let leftPointer = 0
  let rightPointer = 0

  while (true) {
      if (currentSum >= target) {
          minSub = Math.min(minSub, rightPointer - leftPointer + 1)
          currentSum -= nums[leftPointer]
          leftPointer++
      } else {
          rightPointer++
          currentSum += nums[rightPointer]
      }

      if (rightPointer > nums.length - 1) break
  }

  return minSub
}