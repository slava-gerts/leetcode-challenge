export function getMinimumDifference(root) {
  let minRes = Infinity
  let prev = null

  const dfs = node => {
      if (!node) return

      dfs(node.left)
      if (prev !== null) minRes = Math.min(minRes, Math.abs(node.val - prev))
      prev = node.val
      dfs(node.right)
  }

  dfs(root)

  return minRes
};