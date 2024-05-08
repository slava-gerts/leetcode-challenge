export function sortList(head) {
  if (head === null || head.next === null) return head

  const [left, right] = split(head)

  return merge(sortList(left), sortList(right))
}

function split(node) {
  let slow = node
  let fast = node.next

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  const left = node
  const right = slow.next

  slow.next = null

  return [left, right]
}

function merge(left, right) {
  const dummy = new ListNode()
  let temp = dummy

  while (left && right) {
    if (left.val < right.val) {
      temp.next = left
      left = left.next
    } else {
      temp.next = right
      right = right.next
    }

    temp = temp.next
  }

  if (left) {
    temp.next = left
  }

  if (right) {
    temp.next = right
  }

  return dummy.next
}

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}