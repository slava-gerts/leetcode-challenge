export function copyRandomList(head) {
  const cache = new Map()

  let curr = head
  while (curr) {
    cache.set(curr, {val: curr.val})
    curr = curr.next
  }

  curr = head
  while (curr) {
    cache.get(curr).next = cache.get(curr.next) || null
    cache.get(curr).random = cache.get(curr.random) || null

    curr = curr.next
  }

  return cache.get(head)
}