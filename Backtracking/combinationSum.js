export function combinationSum(candidates, target) {
  const result = []

  const backtrack = (arr = [], sum = 0, index = 0) => {
    if (sum > target) return

    if (sum === target) result.push(arr)

    for (let i = index; i < candidates.length; i++) {
      backtrack([...arr, candidates[i]], sum + candidates[i], i)
    }
  }

  backtrack()

  return result
}