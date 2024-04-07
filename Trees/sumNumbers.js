export function sumNumbers(root) {
  let sum = 0

  const dfs = (node, currentSum) => {
    if (!node) return

    currentSum = currentSum * 10 + node.val

    if (!node.left && !node.right) {
      sum += currentSum
      return
    }

    dfs(node.left, currentSum)
    dfs(node.right, currentSum)
  }

  dfs(root, 0)

  return sum
}