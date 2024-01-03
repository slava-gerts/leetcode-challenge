export function reverseLinkedList(head) {
  let curr = head
  let prev = null
  let next = null
  
  while(curr) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}

export function reverseLinkedListRecursion(head) {
  let newHead = head
  if (head.next) {
    newHead = reverseLinkedListRecursion(head.next)
    head.next.next = head
  }
  head.next = null
  return newHead
}