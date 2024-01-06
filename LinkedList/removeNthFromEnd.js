export function removeNthFromEnd(head, n) {
  let fast = head, slow = head

  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  if (!fast) return head.next

  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  
  slow.next = slow.next.next
  return head
}

function f() {
  let length = 0

  let curr = head
  while (curr) {
    curr = curr.next
    length++
  }

  if (length === 1) return null
  if (length === n) return head.next

  const index = length - n
  let currentIndex = 0
  let prev = null
  curr = head
  while(currentIndex < index && curr) {
    prev = curr
    curr = curr.next
    currentIndex++
  }

  prev.next = curr.next

  return head
}