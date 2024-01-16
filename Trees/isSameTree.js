export function isSameTree(p, q) {
  if (p == q) return true

  if (!p || !q || p.val !== q.val) return false

  const isLeftEqual = isSameTree(p.left, q.left)
  const isRightEqual = isSameTree(p.right, q.right)

  return isLeftEqual && isRightEqual
}