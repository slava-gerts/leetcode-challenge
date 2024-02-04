export function maxSumArbitrary(tree) {
  let result = 0

  const helper = (node) => {
    if (!node) return 0

    const leftValue = Math.max(helper(node.left), 0)
    const rightValue = Math.max(helper(node.right), 0)

    result = Math.max(leftValue + rightValue + node.val, result)

    return Math.max(leftValue, rightValue) + node.val
  }

  helper(tree)
  return result
}