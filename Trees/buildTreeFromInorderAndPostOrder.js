export function buildTreeFromInorderAndPostOrder(inorder, postorder) {
  if (inorder.length === 0) return null;
  
  const root = new TreeNode(postorder[postorder.length - 1]);
  const rootIndex = inorder.indexOf(root.val);
  
  root.left = buildTreeFromInorderAndPostOrder(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex));
  root.right = buildTreeFromInorderAndPostOrder(inorder.slice(rootIndex + 1), postorder.slice(rootIndex, -1));
  
  return root;
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}