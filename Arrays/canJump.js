export function canJump(nums) {
  var goal = nums.length - 1

  for (var i = (nums.length-1); i>=0; i--) {
    if (nums[i]+i >= goal)
      goal = i
  }

  return goal == 0
}