export const kSmallestPairs = (nums1, nums2, k) => {
  if (nums1.length === 0 || nums2.length === 0 || k === 0) return []
  
  const heap = new MinHeap()
  
  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    heap.insert([nums1[i], nums2[0], 0])
  }
  
  const result = []
  
  while (k-- > 0 && heap.size() > 0) {
    const [num1, num2, index2] = heap.remove()
    result.push([num1, num2])
    
    if (index2 + 1 < nums2.length) {
      heap.insert([num1, nums2[index2 + 1], index2 + 1])
    }
  }
  
  return result
}

class MinHeap {
  constructor() {
    this.heap = []
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

      if (element[0] + element[1] >= parent[0] + parent[1]) break

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
        if (leftChild[0] + leftChild[1] < element[0] + element[1]) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex]
        if (
          (swap === null && rightChild[0] + rightChild[1] < element[0] + element[1]) ||
          (swap !== null && rightChild[0] + rightChild[1] < leftChild[0] + leftChild[1])
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

  size() {
    return this.heap.length
  }

  peek() {
    return this.heap[0]
  }
}