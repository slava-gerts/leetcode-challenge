export function findMiddle(head) {
  let slow = head
  let fast = head
  while (fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}