export function reverseBetween(head, left, right) {
  if (!head || left === right) return head

    const dummy = {val: 0, next: head}
    let prev = dummy

    for (let i = 0; i < left - 1; i++) {
        prev = prev.next
    }

    let cur = prev.next
    let temp
    for (let i = 0; i < right - left; i++) {
        temp = prev.next
        prev.next = cur.next
        cur.next = cur.next.next
        prev.next.next = temp
    }

    return dummy.next
};