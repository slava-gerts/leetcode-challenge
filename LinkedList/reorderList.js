export function reorderList(head) {

  // find the middle
  let slow = head
  let fast = head
  while (fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // reverse the second half
  let curr = slow.next
  let prev = null
  let next = null
  while (curr) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  // truncate in order to get the first half
  slow.next = null
  let h1 = head

  // combine two halves
  while (prev) {
    next = h1.next
    h1.next = prev
    h1 = prev
    prev = next
  }

  return head
}