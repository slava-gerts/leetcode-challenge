export function swapNodes(head, k) {
  let first = head
  for (let i = 1; i < k; i++) {
    first = first.next
  }

  let second = head
  let temp = first
  while (temp.next) {
    temp = temp.next
    second = second.next
  }

  const tempVal = first.val
  first.val = second.val
  second.val = tempVal

  return head
}