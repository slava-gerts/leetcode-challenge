export function isValidBST(root) {
  if (!root) return true

  function helper(node, minVal, maxVal) {
    if (!node) return true

    if (node.val >= maxVal || node.val <= minVal) return false

    return helper(node.left, minVal, node.val) && helper(node.right, node.val, maxVal)
  }

  return helper(root)
}