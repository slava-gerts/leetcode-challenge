export function deleteDuplicates (head) {
  let dummy = {val: -Infinity, next: head}
  let cur = head
  let prev = dummy
  let valueToRemove
  while (cur) {
      if (cur.val === cur.next?.val || cur.val === valueToRemove) {
          valueToRemove = cur.val
          prev.next = cur.next
      } else {
        prev = cur
      }
      cur = cur.next
  }

  return dummy.next
};