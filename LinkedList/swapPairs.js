export function swapPairs(head) {
  const dummy = {val: 0, next: head}
  let prev = dummy

  while (prev.next && prev.next.next) {
    const first = prev.next
    const second = first.next

    first.next = second.next
    second.next = first
    prev.next = second

    prev = first
  }

  return dummy.next
}