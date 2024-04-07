export function buildTreeFromPreorderAndInorder(preorder, inorder) {
  if (preorder.length === 0) return null;
  
  const root = new TreeNode(preorder[0]);
  const rootIndex = inorder.indexOf(preorder[0]);
  
  root.left = buildTreeFromPreorderAndInorder(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));
  root.right = buildTreeFromPreorderAndInorder(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));
  
  return root;
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}