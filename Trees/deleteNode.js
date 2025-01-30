export function deleteNode(root, key) {
  if (!root) return null

  if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key)
  } else {
    if (!root.left) {
      return root.right
    } else if (!root.right) {
      return root.left
    } else {
      let minNode = root.right
      while (minNode.left) {
        minNode = minNode.left
      }

      root.val = minNode.val
      root.right = deleteNode(root.right, minNode.val)
    }
  }

  return root
}