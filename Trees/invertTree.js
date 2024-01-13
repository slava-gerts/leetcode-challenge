export function invertTree(root) {
  const queue = [root]

  let curr, temp
  while (queue.length > 0) {
      curr = queue.shift()

      temp = curr.left
      curr.left = curr.right
      curr.right = temp

      if (curr.left) {
          queue.push(curr.left)
      }

      if (curr.right) {
          queue.push(curr.right)
      }
  }

  return root
}