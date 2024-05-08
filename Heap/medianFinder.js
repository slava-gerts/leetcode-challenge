class MedianFinder {
  constructor() {
    this.minHeap = new Heap(Heap.minComparator)
    this.maxHeap = new Heap(Heap.maxComparator)
  }
  addNum(num) {
    this.maxHeap.insert(num)
    this.minHeap.insert(this.maxHeap.remove())

    if (this.maxHeap.size() < this.minHeap.size()) {
      this.maxHeap.insert(this.minHeap.remove())
    }
  }
  findMedian() {
    return this.maxHeap.size() > this.minHeap.size()
      ? this.maxHeap.peek()
      : (this.maxHeap.peek() + this.minHeap.peek()) / 2
  }
}

class Heap {
  constructor(comparator) {
    this.heap = []
    this.comparator = comparator
  }

  insert(val) {
    this.heap.push(val)
    this.bubbleUp()
  }

  remove() {
    const min = this.heap[0]
    const end = this.heap.pop()

    if (this.heap.length > 0) {
      this.heap[0] = end
      this.bubbleDown()
    }

    return min
  }

  bubbleUp() {
    let index = this.heap.length - 1
    const element = this.heap[index]

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.heap[parentIndex]

      if (this.comparator(element, parent) >= 0) break

      this.heap[parentIndex] = element
      this.heap[index] = parent
      index = parentIndex
    }
  }

  bubbleDown() {
    let index = 0
    const length = this.heap.length
    const element = this.heap[0]

    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex]
        if (this.comparator(leftChild, element) < 0) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex]
        if (
          (swap === null && this.comparator(rightChild, element) < 0) ||
          (swap !== null && this.comparator(rightChild, leftChild) < 0)
        ) {
          swap = rightChildIndex
        }
      }

      if (swap === null) break

      this.heap[index] = this.heap[swap]
      this.heap[swap] = element
      index = swap
    }
  }

  peek() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }
}

Heap.minComparator = (a, b) => a - b
Heap.maxComparator = (a, b) => b - a

// time complexity: O(log n) for insert and remove
// space complexity: O(n) for the heap

export const medianFinder = () => {
  const mf = new MedianFinder()
  mf.addNum(1)
  mf.addNum(2)
  console.log(mf.findMedian())
  mf.addNum(3)
  console.log(mf.findMedian())
  return mf
}