export function findPeakElement(nums) {
  // let left = 0;
  // let right = nums.length - 1;
  
  // while (left < right) {
  //   const mid = Math.floor((left + right) / 2);
    
  //   if (nums[mid] < nums[mid + 1]) {
  //     left = mid + 1;
  //   } else {
  //     right = mid;
  //   }
  // }
  
  // return left;
  var start = 0, end = nums.length - 1;
    while (start < end) {
        var mid = Math.floor((start + end) / 2);
        if (mid === 0) {
            return nums[0] >= nums[1] ? 0 : 1;
        }
        if (mid === end) {
            return nums[end - 1] >= nums[end - 2] ? end - 1 : end - 2;
        }

        if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
            return mid;
        }
        if (nums[mid] < nums[mid - 1]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
}