export function isCompleteTree(root) {
  if (!root) return true

  const queue = [root]
  let isNullSeen = false

  while (queue.length) {
    const node = queue.shift()

    if (!node) {
      isNullSeen = true
    } else {
      if (isNullSeen) return false

      queue.push(node.left)
      queue.push(node.right)
    }
  }

  return true
}