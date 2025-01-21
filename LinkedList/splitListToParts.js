export function splitListToParts(head, k) {
  let length = 0
  let curr = head
  while (curr) {
    length++
    curr = curr.next
  }

  const numsInPart = Math.floor(length / k)
  const numsWithExtraOne = length % k

  const result = []

  curr = head
  for (let i = 0; i < k; i++) {
    let expectedNums = numsInPart + (i < numsWithExtraOne ? 1 : 0)
    const partHead = curr

    for (let j = 1; j < expectedNums; j++) {
      if (curr) curr = curr.next
    }

    if (curr) {
      const next = curr.next
      curr.next = null
      curr = next
    }

    result.push(partHead)
  }

  return result
}