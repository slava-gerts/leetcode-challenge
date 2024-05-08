// export const findKthLargest = function(nums, k) {
//   const heap = new MinHeap()
//   for (let i = 0; i < k; i++) {
//       heap.push(nums[i])
//   }

//   for (let i = k; i < nums.length; i++) {
//       if (nums[i] > heap.peek()) {
//           heap.pop()
//           heap.push(nums[i])
//       }
//   }

//   return heap.peek()
// };

// class MinHeap {
//   constructor() {
//       this.heap = []
//   }

//   push(val) {
//       this.heap.push(val)
//       this.bubbleUp()
//   }

//   pop() {
//       const max = this.heap[0]
//       const end = this.heap.pop()

//       if (this.heap.length > 0) {
//           this.heap[0] = end
//           this.bubbleDown()
//       }

//       return max
//   }

//   peek() {
//       return this.heap[0]
//   }

//   bubbleUp() {
//       let index = this.heap.length - 1
//       const element = this.heap[index]

//       while (index > 0) {
//           let parentIndex = Math.floor((index - 1) / 2)
//           let parent = this.heap[parentIndex]
          
//           if (element >= parent) break

//           this.heap[parentIndex] = element
//           this.heap[index] = parent
//           index = parentIndex
//       }
//   }

//   bubbleDown() {
//       let index = 0
//       const length = this.heap.length
//       const element = this.heap[index]

//       while(true) {
//           let leftChildIndex = 2 * index + 1
//           let rightChildIndex = 2 * index + 2
//           let leftChild, rightChild
//           let swap = null

//           if (leftChildIndex < length) {
//               leftChild = this.heap[leftChildIndex]
//               if (leftChild < element) {
//                   swap = leftChildIndex
//               }
//           }

//           if (rightChildIndex < length) {
//               rightChild = this.heap[rightChildIndex]
//               if (
//                   (swap === null && rightChild < element) ||
//                   (swap !== null && rightChild < leftChild)
//               ) {
//                   swap = rightChildIndex
//               }
//           }

//           if (swap === null) break

//           this.heap[index] = this.heap[swap]
//           this.heap[swap] = element
//           index = swap
//       }
//   }
// }

// export const findKthLargest = function(nums, k) {
//   const partition = (left, right, pivotIndex) => {
//       const pivot = nums[pivotIndex];
//       [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
//       let storedIndex = left;
//       for (let i = left; i < right; i++) {
//           if (nums[i] < pivot) {
//               [nums[storedIndex], nums[i]] = [nums[i], nums[storedIndex]];
//               storedIndex++;
//           }
//       }
//       [nums[right], nums[storedIndex]] = [nums[storedIndex], nums[right]];
//       return storedIndex;
//   };
  
//   let left = 0, right = nums.length - 1;
//   while (true) {
//       const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
//       const newPivotIndex = partition(left, right, pivotIndex);
//       if (newPivotIndex === nums.length - k) {
//           return nums[newPivotIndex];
//       } else if (newPivotIndex > nums.length - k) {
//           right = newPivotIndex - 1;
//       } else {
//           left = newPivotIndex + 1;
//       }
//   }
// };

// class MinHeap {
//   constructor() {
//       this.heap = []
//   }

//   bubbleUp() {
//     let index = this.heap.length - 1
//     const element = this.heap[index]

//     while (index > 0) {
//       let parentIndex = Math.floor((index - 1) / 2)
//       let parent = this.heap[parentIndex]

//       if (element >= parent) break

//       this.heap[parentIndex] = element
//       this.heap[index] = parent
//     }
//   }

//   push(val) {
//     this.heap.push(val)
//     this.bubbleUp()
//   }

//   peak() {
//     return this.heap[0]
//   }

//   pop() {
//     const min = this.heap[0]
//     const end = this.heap.pop()

//     if (this.heap.length > 0) {
//       this.heap[0] = end
//       this.bubbleDown()
//     }

//     return min
//   }

//   bubbleDown() {
//     let index = 0
//     const length = this.heap.length
//     const element = this.heap[0]

//     while (true) {
//       let leftChildIndex = 2 * index + 1
//       let rightChildIndex = 2 * index + 2
//       let leftChild, rightChild
//       let swap = null

//       if (leftChildIndex < length) {
//         leftChild = this.heap[leftChildIndex]
//         if (leftChild < element) {
//           swap = leftChildIndex
//         }
//       }

//       if (rightChildIndex < length) {
//         rightChild = this.heap[rightChildIndex]
//         if (
//           swap === null && rightChild < element ||
//           swap !== null && rightChild < leftChild
//         ) {
//           swap = rightChildIndex
//         }
//       }

//       if (swap === null) break

//       this.heap[index] = this.heap[swap]
//       this.heap[swap] = element
//       index = swap
//     }
//   }
// }

export const findKthLargest = (nums, k) => {
  const partition = (left, right, pivotIndex) => {
    const pivot = nums[pivotIndex]
    [nums[right], nums[pivotIndex]] = [nums[pivotIndex], nums[right]]
    let storedIndex = left
    for (let i = left; i < right; i++) {
      if (nums[i] < pivot) {
        [nums[storedIndex], nums[i]] = [nums[i], nums[storedIndex]]
        storedIndex++
      }
    }
    [nums[right], nums[storedIndex]] = [nums[storedIndex], nums[right]]
    return storedIndex
  }

  let left = 0, right = nums.length - 1
  while (true) {
    const pivotIndex = left + Math.floor(Math.random() * (right - left + 1))
    const newPivotIndex = partition(left, right, pivotIndex)
    if (newPivotIndex === nums.length - k) {
      return nums[newPivotIndex]
    } else if (newPivotIndex > nums.length - k) {
      right = newPivotIndex - 1
    } else {
      left = newPivotIndex + 1
    }
  }
}
