export function mergeTwoLists(l1, l2) {
  const result = {val: 0, next: null}
  let currentNode = result

  while (l1 && l2) {
    if (l1.val < l2.val) {
      currentNode.next = l1
      l1 = l1.next
    } else {
      currentNode.next = l2
      l2 = l2.next
    }

    currentNode = currentNode.next
  }

  currentNode.next = l1 || l2
  return result.next
}