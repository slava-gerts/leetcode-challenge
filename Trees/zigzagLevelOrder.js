export function zigzagLevelOrder(root) {
  if (!root) return []

  const result = []

  const queue = [root]

  let isDirectionLeft = true
  while (queue.length) {
      const length = queue.length
      const levelResult = []
      for (let i = 0; i < length; i++) {
          const node = queue.shift()
          if (isDirectionLeft) {
              levelResult.push(node.val)
          } else {
              levelResult.unshift(node.val)
          }
          if (node.left) queue.push(node.left)
          if (node.right) queue.push(node.right) 
      }

      result.push(levelResult)
      isDirectionLeft = !isDirectionLeft
  }

  return result
};