export function isSubTree(root, subRoot) {
  const queue = [root]

  while (queue.length > 0) {
      const node = queue.shift()
      if (node.val === subRoot.val && isSameTree(subRoot, node)) {
          return true
      }

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
  }

  return false
};

function isSameTree(node1, node2) {
  const queue1 = [node1]
  const queue2 = [node2]

  while (queue1.length > 0) {
      if (queue2.length === 0) return false

      const n1 = queue1.shift()
      const n2 = queue2.shift()

      if (!n1 && !n2) continue

      if (!n1 || !n2 || n1.val !== n2.val) return false

      queue1.push(n1.left)
      queue1.push(n1.right)

      queue2.push(n2.left)
      queue2.push(n2.right)
  }

  return true
}