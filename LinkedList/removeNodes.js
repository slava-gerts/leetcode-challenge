export function removeNodes(head) {
  if (!head?.next) return head

  let prev = null
  let curr = head
  while (curr) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  curr = prev.next
  prev.next = null
  while (curr) {
    let temp = curr.next
    if (curr.val >= prev.val) {
      curr.next = prev
      prev = curr
    }

    curr = temp
  }

  return prev
}