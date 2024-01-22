export function goodNodes(root) {
  let total = 0
  helper(root, root.val)
  return total

  function helper(node, max) {
      if (!node) return

      if (node.val >= max) total++

      helper(node.left, Math.max(max, node.val))
      helper(node.right, Math.max(max, node.val))
  }
}