export function insertIntoBST(root, val) {
  if (!root) return {val, left: null, right: null}

  if (root.val > val) {
    root.left = insertIntoBST(root.left, val)
  } else {
    root.right = insertIntoBST(root.right, val)
  }

  return root
}