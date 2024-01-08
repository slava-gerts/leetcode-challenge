export function addTwoNumbers(l1, l2) {
  let head = {val: 0, next: null}
  let curr = head
  let curry = 0

  while (l1 || l2 || curry) {
    const l1Val = l1?.val || 0
    const l2Val = l2?.val || 0
    const sum = l1Val + l2Val + curry

    const newNode = {val: sum % 10, next: null}
    curry = Math.floor(sum / 10)

    curr.next = newNode
    curr = newNode

    l1 = l1?.next
    l2 = l2?.next
  }

  return head.next
}