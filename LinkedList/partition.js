export function partition (head, x) {
  const before = {val: 0}
  const after = {val: 0}

  let beforePointer = before
  let afterPointer = after
  while (head) {
    if (head.val < x) {
      beforePointer.next = head
      beforePointer = beforePointer.next
    } else {
      afterPointer.next = head
      afterPointer = afterPointer.next
    }

    head = head.next
  }

  afterPointer.next = null
  beforePointer.next = after.next

  return before.next
};