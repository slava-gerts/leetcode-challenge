export function mergeInBetween(list1, a, b, list2) {
  let index = 0
  let prevA = list1
  let afterB = list1

  while (index < a - 1) {
    prevA = prevA.next
    index++
  }

  afterB = prevA
  while (index <= b) {
    afterB = afterB.next
    index++
  }

  let tail2 = list2
  while (tail2.next) {
    tail2 = tail2.next
  }

  prevA.next = list2
  tail2.next = afterB

  return list1
}