export function populateNextRightPointer(root) {
  if (!root) return null;
  
  const queue = [root];
  while (queue.length !== 0) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
          if (i < len - 1) queue[i].next = queue[i + 1];
          if (queue[i].left) queue.push(queue[i].left);
          if (queue[i].right) queue.push(queue[i].right);
      }
      queue.splice(0, len);
  }
  return root;
}

