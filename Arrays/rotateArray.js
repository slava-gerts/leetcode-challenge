export function rotateArray(nums, k) {
  k %= nums.length

  const reverse = (start, end) => {
    while (start < end) {
      [nums[end], nums[start]] = [nums[start], nums[end]]
      start++
      end--
    }
  }

  reverse(0, nums.length - 1)
  reverse(0, k - 1)
  reverse(k, nums.length - 1)
}

// 1, 2, 3, 4, 5, 6, 7
// 5, 6, 7, 1, 2, 3, 4

// 7, 6, 5, 4, 3, 2, 1
// 5, 6, 7, 4, 3, 2, 1
// 5, 6, 7, 1, 2, 3, 4