export function isBalanced(root) {
  let isBalanced = true

  function dfs(node) {
      if (!node) return 0

      const leftDepth = dfs(node.left)
      const rightDepth = dfs(node.right)

      if (Math.abs(leftDepth - rightDepth) > 1) {
          isBalanced = false
      }

      return Math.max(leftDepth, rightDepth) + 1
  }

  dfs(root)

  return isBalanced
}