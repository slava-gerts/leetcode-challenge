export function countCompleteTreeNodes(root) {
  const left = leftDepth(root);
  const right = rightDepth(root);

  if (left === right) return Math.pow(2, left) - 1;

  return 1 + countCompleteTreeNodes(root.left) + countCompleteTreeNodes(root.right);
}

function leftDepth(node) {
  if (!node) return 0;
  return 1 + leftDepth(node.left);
}

function rightDepth(node) {
  if (!node) return 0;
  return 1 + rightDepth(node.right);
}