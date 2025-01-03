class BSTIterator {
  constructor(root) {
    this.nodesSorted = []
    this.index = -1
    this._inOrder(root)
  }

  _inOrder(root) {
    if (root === null) return

    this._inOrder(root.left)
    this.nodesSorted.push(root.val)
    this._inOrder(root.right)
  }

  _preOrder(root) {
    if (root === null) return

    this.nodesSorted.push(root.val)
    this._preOrder(root.left)
    this._preOrder(root.right)
  }

  _postOrder(root) {
    if (root === null) return

    this._postOrder(root.left)
    this._postOrder(root.right)
    this.nodesSorted.push(root.val)
  }

  next() {
    return this.nodesSorted[++this.index]
  }

  hasNext() {
    return this.index <= this.nodesSorted.length
  }
}