export function convertToArray(root) {
  class BSTIterator {
    constructor(root) {
        this.root = root;
        this.stack = [];
    }
    
    next() {
        while(this.root) {
            this.stack.push(this.root);
            this.root = this.root.left;
        }
        const res = this.stack.pop();
        this.root = res.right;
        return res.val;
    }
    
    hasNext() {
        return this.root || this.stack.length;
    }
  }

  const iterator = new BSTIterator(root);
  console.log(iterator.next());
  console.log(iterator.next());
}