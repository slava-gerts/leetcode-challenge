export function kthSmallest(root, k) {
  // const stack = []
  // let count = 1
  // let node = root

  // while (node || stack.length) {
  //   while (node) {
  //     stack.push(node)
  //     node = node.left
  //   }

  //   node = stack.pop()
  //   if (count === k) return node.val

  //   count++
  //   node = node.right
  // }

  let res = [];
  let current = root;

  function traverse(node){
      if(node.left) traverse(node.left);
      res.push(node.val);
      if(node.right) traverse(node.right);
  }

  traverse(current);
  
  return res[k-1];
}