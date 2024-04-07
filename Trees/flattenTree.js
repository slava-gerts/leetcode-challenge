export function flattenTree(root) {
  let prev = null
    
    const dfs = (node) => {
        if (!node) return

        dfs(node.right)
        dfs(node.left)

        node.right = prev
        node.left = null
        prev = node
    }

    dfs(root)

    return root
}

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}