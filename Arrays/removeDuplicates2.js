export function removeDuplicates2(nums) {
  let k = 2

    for (let i = 2; i < nums.length; i++) {
        if (nums[k - 2] !== nums[i]) {
            nums[k] = nums[i]
            k++
        }
    }

    return k
}