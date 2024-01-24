function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

export const binaryTree = new TreeNode(
  4,
  new TreeNode(
    2,
    new TreeNode(1),
    new TreeNode(3),
  ),
  new TreeNode(
    7,
    new TreeNode(6),
    new TreeNode(9),
  )
)

export const binaryTree2 = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(4),
    new TreeNode(5),
  ),
  new TreeNode(3)
)

export const unBalancedTree = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(
      3,
      new TreeNode(4),
      new TreeNode(4),
    ),
    new TreeNode(3),
  ),
  new TreeNode(2),
)

export const tree = new TreeNode(
  3,
  new TreeNode(
    4,
    new TreeNode(1),
    new TreeNode(2),
  ),
  new TreeNode(5),
)

export const subTree = new TreeNode(
  4,
  new TreeNode(1),
  new TreeNode(2),
)

export const searchBinaryTree = new TreeNode(
  6,
  new TreeNode(
    2,
    new TreeNode(
      0,
    ),
    new TreeNode(
      4,
      new TreeNode(
        3,
      ),
      new TreeNode(
        5,
      )
    )
  ),
  new TreeNode(
    8,
    new TreeNode(
      7,
    ),
    new TreeNode(
      9,
    )
  )
)

export const childSearchBinaryTreeNode1 = searchBinaryTree.left
export const childSearchBinaryTreeNode2 = childSearchBinaryTreeNode1.right

export const goodNodesTree = new TreeNode(
  3,
  new TreeNode(
    1,
    new TreeNode(3)
  ),
  new TreeNode(
    4,
    new TreeNode(1),
    new TreeNode(5)
  )
)

export const invalidSearchTree = new TreeNode(
  5,
  new TreeNode(1),
  new TreeNode(
    6,
    new TreeNode(3),
    new TreeNode(7),
  )
)