// export function maxSum(tree) {
//   if (!tree) return 0

//   const leftValue = maxSum(tree.left)
//   const rightValue = maxSum(tree.right)

//   return Math.max(leftValue, rightValue) + tree.val
// }

export function maxSum(tree) {
  const dfs = (node) => {
    if (!node) return 0

    return Math.max(dfs(node.left) + node.val, dfs(node.right) + node.val)
  }

  return dfs(tree)
}