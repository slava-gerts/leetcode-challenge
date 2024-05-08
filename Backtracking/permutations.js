export function permutations(nums) {
  const res = []

  const backtrack = (nums, path) => {
    if (nums.length === 0) {
      res.push(path)
      return
    }

    for (let i = 0; i < nums.length; i++) {
      console.log(i)
      backtrack([...nums.slice(0, i), ...nums.slice(i + 1)], [...path, nums[i]])
    }
  }

  backtrack(nums, [])

  return res
}