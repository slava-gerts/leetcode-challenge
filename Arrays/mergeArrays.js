export function mergeArrays(nums1, m, nums2, n) {
  let firstIndex = m - 1
  let secondIndex = n - 1
  let totalIndex = m + n - 1
  
  while (secondIndex >= 0) {
      if (firstIndex >= 0 && nums1[firstIndex] > nums2[secondIndex]) {
          nums1[totalIndex--] = nums1[firstIndex--]
      } else {
          nums1[totalIndex--] = nums2[secondIndex--]
      }
  }

  return nums1
}