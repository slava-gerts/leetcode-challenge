export function sortedArrayToBST(nums) {
  return buildTree(nums, 0, nums.length - 1);
}

function buildTree(nums, start, end) {
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);
  const root = new TreeNode(nums[mid]);

  root.left = buildTree(nums, start, mid - 1);
  root.right = buildTree(nums, mid + 1, end);

  return root;
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}