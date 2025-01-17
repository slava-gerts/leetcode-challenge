export function pairSum(head) {
  let slow = head
  let fast = head
  while (fast?.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let prev = null
  let curr = slow
  while (curr) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  let max = -Infinity
  curr = head
  while (prev) {
    max = Math.max(max, curr.val + prev.val)
    prev = prev.next
    curr = curr.next
  }

  return max
}