export function lowestCommonAncestor2(root, p, q) {
  if (!root || root === p || root === q) return root

  const left = lowestCommonAncestor2(root.left, p, q)
  const right = lowestCommonAncestor2(root.right, p, q)

  if (left && right) return root
  return left || right
}