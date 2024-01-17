export function lowestCommonAncestor(root, p, q) {
  while (root) {
    if (root.val > p.val && root.val > q.val) {
        root = root.left
    } else if (root.val < p.val && root.val < q.val) {
        root = root.right
    } else {
        return root
    }
  }
};