import {cloneDeep} from './cloneDeep.js'

import {reverseLinkedList, reverseLinkedListRecursion} from '../LinkedList/reverseLinkedList.js'
import {mergeTwoLists} from '../LinkedList/mergeTwoSortedLists.js'
import {reorderList} from '../LinkedList/reorderList.js'
import {findMiddle} from '../LinkedList/findMiddle.js'
import {removeNthFromEnd} from '../LinkedList/removeNthFromEnd.js'
import {copyRandomList} from '../LinkedList/copyRandomList.js'
import { addTwoNumbers } from '../LinkedList/addTwoNumbers.js'
import { hasCycle } from '../LinkedList/hasCycle.js'
import {findDuplicate} from '../LinkedList/findDuplicate.js'
import {LRUCacheFunc} from '../LinkedList/LRUCache.js'

import {invertTree} from '../Trees/invertTree.js'
import {maxDepth} from '../Trees/maxDepth.js'
import {diameterOfBinaryTree} from '../Trees/diameterOfBinaryTree.js'
import {isBalanced} from '../Trees/isBalanced.js'
import {isSameTree} from '../Trees/isSameTree.js'
import {isSubTree} from '../Trees/isSubTree.js'
import {lowestCommonAncestor} from '../Trees/lowestCommonAncestor.js'
import {rightSideView} from '../Trees/rightSideView.js'
import {goodNodes} from '../Trees/goodNodes.js'
import {isValidBST} from '../Trees/isValidBST.js'
import {kthSmallest} from '../Trees/kthSmallest.js'
import {dijkstra} from '../Trees/dijkstra.js'
import {traverseTree} from '../Trees/traverseTree.js'
import {maxSum} from '../Trees/maxSum.js'
import {maxSumArbitrary} from '../Trees/maxSumArbitrary.js'

import {subsets} from '../Backtracking/subsets.js'
import {findAllDuplicates} from '../Backtracking/findAllDuplicates.js'

import {mergeSort} from '../Sorting/mergeSort.js'
import {randomInteger} from '../Sorting/randomInteger.js'
import {quickSort} from '../Sorting/quickSort.js'

import {smartSum} from '../Arrays/smartSum.js'
import {rotateMatrix} from '../Arrays/rotateMatrix.js'
import {trapWater, trapWater2} from '../Arrays/trapWater.js'
import {firstMissingPositive} from '../Arrays/firstMissingPositive.js'
import {mergeArrays} from '../Arrays/mergeArrays.js'
import {findMaximumValue} from '../Arrays/findMaximumValue.js'
import {removeElement} from '../Arrays/removeElement.js'
import {removeDuplicates} from '../Arrays/removeDuplicates.js'
import {removeDuplicates2} from '../Arrays/removeDuplicates2.js'
import {majorityElement} from '../Arrays/majorityElement.js'
import {rotateArray} from '../Arrays/rotateArray.js'
import {canJump} from '../Arrays/canJump.js'
import {canJump2} from '../Arrays/canJump2.js'
import {hIndex} from '../Arrays/hIndex.js'
import {canCompleteCircuit} from '../Arrays/canCompleteCircuit.js'
import {candy} from '../Arrays/candy.js'
import {romanToInt} from '../Arrays/romanToInt.js'
import {intToRoman} from '../Arrays/intToRoman.js'
import {longestCommonPrefix} from '../Arrays/longestCommonPrefix.js'
import {separateLiquids} from '../Arrays/separateLiquids.js'

import {amountUniquePaths} from '../DynamicProgramming/amountUniquePaths.js'
import {fibonacci} from '../DynamicProgramming/fibonacci.js'

import {linkedList, l1, l2, l1Big, l2Big, linkedListWithRandomField, cycledList, cycledArray} from '../LinkedList/fixtures.js'
import {
  binaryTree, binaryTree2, unBalancedTree, tree, subTree, searchBinaryTree, childSearchBinaryTreeNode1, childSearchBinaryTreeNode2, goodNodesTree, invalidSearchTree, graph, sumTree, arbitraryTree,
} from '../Trees/fixtures.js'
import {matrix} from '../Arrays/fixtures.js'

export const tasks = new Map([
  ['------ Linked list ------'],
  ['reverseLinkedList', {func: reverseLinkedList, args: [cloneDeep(linkedList)]}],
  ['reverseLinkedListRecursion', {func: reverseLinkedListRecursion, args: [cloneDeep(linkedList)]}],
  ['findMiddle', {func: findMiddle, args: [cloneDeep(linkedList)]}],
  ['mergeTwoSortedLists', {func: mergeTwoLists, args: [cloneDeep(l1), cloneDeep(l2)]}],
  ['reorderList', {func: reorderList, args: [cloneDeep(linkedList)]}],
  ['removeNthFromEnd', {func: removeNthFromEnd, args: [cloneDeep(linkedList), 2]}],
  ['copyRandomList', {func: copyRandomList, args: [linkedListWithRandomField]}],
  ['addTwoNumbers', {func: addTwoNumbers, args: [cloneDeep(l1Big), cloneDeep(l2Big)]}],
  ['hasCycle', {func: hasCycle, args: [cycledList]}],
  ['findDuplicate', {func: findDuplicate, args: [cycledArray]}],
  ['LRUCacheFunc', {func: LRUCacheFunc, args: []}],
  ['------ Tree -------'],
  ['invertTree', {func: invertTree, args: [cloneDeep(binaryTree)]}],
  ['maxDepth', {func: maxDepth, args: [cloneDeep(binaryTree2)]}],
  ['diameterOfBinaryTree', {func: diameterOfBinaryTree, args: [cloneDeep(binaryTree2)]}],
  ['isBalanced', {func: isBalanced, args: [cloneDeep(unBalancedTree)]}],
  ['isSameTree', {func: isSameTree, args: [cloneDeep(binaryTree), cloneDeep(binaryTree)]}],
  ['isSubTree', {func: isSubTree, args: [cloneDeep(tree), cloneDeep(subTree)]}],
  ['lowestCommonAncestor', {func: lowestCommonAncestor, args: [searchBinaryTree, childSearchBinaryTreeNode1, childSearchBinaryTreeNode2]}],
  ['rightSideView', {func: rightSideView, args: [cloneDeep(binaryTree2)]}],
  ['goodNodes', {func: goodNodes, args: [cloneDeep(goodNodesTree)]}],
  ['isValidBST', {func: isValidBST, args: [cloneDeep(invalidSearchTree)]}],
  ['kthSmallest', {func: kthSmallest, args: [cloneDeep(searchBinaryTree), 3]}],
  ['dijkstra', {func: dijkstra, args: [graph, 'a', 'e']}],
  ['traverseTree', {func: traverseTree, args: []}],
  ['maxSum', {func: maxSum, args: [cloneDeep(sumTree)]}],
  ['maxSumArbitrary', {func: maxSumArbitrary, args: [cloneDeep(arbitraryTree)]}],
  ['---- Backtracking ----'],
  ['subsets', {func: subsets, args: [[1, 2, 3]]}],
  ['fundAllDuplicates', {func: findAllDuplicates, args: [[4,3,2,7,8,2,3,1]]}],
  ['----- Sorting -----'],
  ['mergeSorting', {func: mergeSort, args: [[3, 5, 1, 6, 9, 8, 2]]}],
  ['randomInteger', {func: randomInteger, args: [0, 10]}],
  ['quickSort', {func: quickSort, args: [[3, 5, 1, 6, 9, 8, 2]]}],
  ['----- Arrays ------'],
  ['smartSum', {func: smartSum, args: [1, 2, [[3, 4], 5], 6]}],
  ['rotateMatrix', {func: rotateMatrix, args: [cloneDeep(matrix)]}],
  ['trapWater', {func: trapWater, args: [[3, 0, 2, 0, 4]]}],
  ['trapWater2', {func: trapWater2, args: [[3, 0, 2, 0, 4]]}],
  ['firstMissingPositive', {func: firstMissingPositive, args: [[-1, -1, -1, -2, -4, 0, 3, -3]]}],
  ['mergeArrays', {func: mergeArrays, args: [[3, 6, 9], 3, [2, 7, 8], 3]}],
  ['findMaximumValue', {func: findMaximumValue, args: [[1, -3, 0.1, -5]]}],
  ['removeElement', {func: removeElement, args: [[3, 2, 2, 3], 3]}],
  ['removeDuplicates', {func: removeDuplicates, args: [[0,0,1,1,1,2,2,3,3,4]]}],
  ['removeDuplicates2', {func: removeDuplicates2, args: [[0,0,1,1,1,2,3]]}],
  ['majorityElement', {func: majorityElement, args: [[2, 2, 3, 3, 3, 2, 2]]}],
  ['rotateArray', {func: rotateArray, args: [[1, 2, 3, 4, 5, 6, 7], 3]}],
  ['canJump', {func: canJump, args: [[2,3,1,1,4]]}],
  ['canJump2', {func: canJump2, args: [[2,3,1,1,4]]}],
  ['hIndex', {func: hIndex, args: [[4,4,0,0]]}],
  ['canCompleteCircuit', {func: canCompleteCircuit, args: [[5,1,2,3,4], [4,4,1,5,1]]}],
  ['candy', {func: candy, args: [[29, 53, 82, 82, 79, 12]]}],
  ['romanToInt', {func: romanToInt, args: ['III']}],
  ['intToRoman', {func: intToRoman, args: [1994]}],
  ['longestCommonPrefix', {func: longestCommonPrefix, args: [["flower","flow","flight"]]}],
  ['separateLiquids', {func: separateLiquids, args: [[['H', 'H', 'W', 'O'],['W','W','O','W'],['H','H','O','O']]]}],
  ['----- Dynamic Programming -------'],
  ['amountUniquePaths', {func: amountUniquePaths, args: [4, 5]}],
  ['fibonacci', {func: fibonacci, args: [10]}],
])
