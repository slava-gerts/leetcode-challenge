// DoublyLinkedList
class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

// Least recently used cache
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()

    this.head = new Node()
    this.tail = new Node()

    this.head.next = this.tail
    this.tail.prev = this.head
  }

  add(node) {
    const prev = this.tail.prev

    node.next = this.tail
    this.tail.prev = node

    prev.next = node
    node.prev = prev
  }

  remove(node) {
    const next = node.next
    const prev = node.prev

    prev.next = next
    next.prev = prev
  }

  get(key) {
    const node = this.cache.get(key)
    if (!node) return -1

    // Removing the node and then adding it again sends the node to the end of the DLL. 
    // The tail of the DLL is the MOST recently used, and the head is the LEAST recently used node.
    this.remove(node)
    this.add(node)

    return node.value
  }

  put(key, value) {
    const node = this.cache.get(key)
    if (node) {
      this.remove(node)
    }

    const newNode = new Node(key, value)
    this.add(newNode)
    this.cache.set(key, newNode)

    if (this.cache.size > this.capacity) {
      const lru = this.head.next
      this.remove(lru)
      this.cache.delete(lru.key)
    }
  }
}

export function LRUCacheFunc() {
  const cache = new LRUCache(2)
  cache.put(1, 1)
  cache.put(2, 2)

  console.log(cache.get(1))

  cache.put(3, 3)

  console.log(cache.get(2))

  cache.put(4, 4)

  console.log(cache.get(1))
  console.log(cache.get(3))
  console.log(cache.get(4))
}