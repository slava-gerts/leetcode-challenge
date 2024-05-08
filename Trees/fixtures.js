function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

export const binaryTreeAncestor = new TreeNode(
  3,
  new TreeNode(
    5,
    new TreeNode(6),
    new TreeNode(2, new TreeNode(7), new TreeNode(4))
  ),
  new TreeNode(
    1,
    new TreeNode(0),
    new TreeNode(8)
  )
)

export const binaryTreeAncestorNode1 = binaryTreeAncestor.left
export const binaryTreeAncestorNode2 = binaryTreeAncestor.left.right.right

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

export const unbalancedBinaryTree = new TreeNode(
  0,
  null,
  new TreeNode(
    2236,
    new TreeNode(
      1277,
      new TreeNode(519)
    ),
    new TreeNode(
      2776,
    )
  )
)

export const completeTree = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(4),
    new TreeNode(5),
  ),
  new TreeNode(
    3,
    new TreeNode(6),
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

export const sumTree = new TreeNode(
  1,
  new TreeNode(
    4,
    new TreeNode(2),
    new TreeNode(
      3,
      new TreeNode(2),
    ),
  ),
  new TreeNode(
    7,
    new TreeNode(5),
    new TreeNode(4),
  ),
)

export const arbitraryTree = new TreeNode(
  -10,
  new TreeNode(9),
  new TreeNode(
    20,
    new TreeNode(
      -3,
      new TreeNode(
        5,
        new TreeNode(-2),
      ),
      new TreeNode(-4),
    ),
    new TreeNode(
      8,
      null,
      new TreeNode(-2)
    )
  )
)

export const graph = {
  a: {b: 2, c: 1, i: 3},
  b: {a: 2, d: 3},
  c: {a: 1, d: 1},
  d: {b: 3, c: 1, e: 5},
  e: {d: 5, i: 2},
  i: {a: 3, e: 2},
}

export const gridOfIslands = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
]

export const surroundedRegions = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
]

export const snakesAndLaddersBoard = [
  [-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1],
  [-1,35,-1,-1,13,-1],
  [-1,-1,-1,-1,-1,-1],
  [-1,15,-1,-1,-1,-1]
]