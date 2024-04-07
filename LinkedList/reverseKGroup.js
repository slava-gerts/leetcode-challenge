// export function reverseKGroup(head, k) {
//   const dummy = {val: 0, next: null}
//   let temp = dummy
//   const stack = []

//   while(head) {
//       for(let i = 0; i < k && head; i++) {
//           stack.push(head)
//           head = head.next
//       }

//       if (stack.length !== k) break

//       while(stack.length > 0) {
//           temp.next = stack.pop()
//           temp = temp.next
//       }
//       temp.next = head
//   }

//   return dummy.next
// };

export function reverseKGroup(head, k) {
  let dummy = {val: 0, next: head}
  let temp = dummy

  while(head) {
      const startNode = head
      const endNode = getEndNode(head, k)

      if (!endNode) break

      temp.next = reverseList(startNode, endNode.next)
      temp = startNode
      head = temp.next
  }

  return dummy.next
};

const getEndNode = function(head, k) {
  while (head && k > 1) {
      head = head.next
      k--
  }

  return head
}

const reverseList = function(startNode, endNode) {
  let prev = endNode
  while (startNode !== endNode) {
      let next = startNode.next
      startNode.next = prev
      prev = startNode
      startNode = next
  }

  return prev
}