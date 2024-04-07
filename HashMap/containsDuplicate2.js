export function containsNearbyDuplicate(nums, k) {
  const cache = {}

  for (let i = 0; i < nums.length; i++) {
      const prev = cache[nums[i]]
      if (prev && i - prev <= k) return true

      cache[nums[i]] = i
  }

  return false
};