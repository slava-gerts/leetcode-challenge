export function sortLinkedLists(head) {
  if (!head || !head.next) return head

  const mid = getMiddle(head)
  const right = mid.next
  mid.next = null

  const leftSorted = sortLinkedLists(head)
  const rightSorted = sortLinkedLists(right)

  return merge(leftSorted, rightSorted)
}

function getMiddle(head) {
  let slow = head
  let fast = head.next

  while (fast?.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

function merge(left, right) {
  const dummy = {val: 0, next: null}
  let curr = dummy

  while (left && right) {
    if (left.val < right.val) {
      curr.next = left
      left = left.next
    } else {
      curr.next = right
      right = right.next
    }

    curr = curr.next
  }

  curr.next = left || right

  return dummy.next
}