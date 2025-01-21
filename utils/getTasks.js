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
import {reverseBetween} from '../LinkedList/reverseBetween.js'
import {reverseKGroup} from '../LinkedList/reverseKGroup.js'
import {deleteDuplicates} from '../LinkedList/deleteDuplicates.js'
import {partition} from '../LinkedList/partition.js'
import {mergeInBetween} from '../LinkedList/mergeInBetween.js'
import {removeNodes} from '../LinkedList/removeNodes.js'
import {pairSum} from '../LinkedList/pairSum.js'
import {swapNodes} from '../LinkedList/swapNodes.js'
import {BrowserHistory} from '../LinkedList/designBrowserHistory.js'
import {swapPairs} from '../LinkedList/swapPairs.js'
import {sortLinkedLists} from '../LinkedList/sortLinkedLists.js'
import {splitListToParts} from '../LinkedList/splitListToParts.js'

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
import {buildTreeFromPreorderAndInorder} from '../Trees/buildTreeFromPreorderAndInorder.js'
import {buildTreeFromInorderAndPostOrder} from '../Trees/buildTreeFromInorderAndPostOrder.js'
import {flattenTree} from '../Trees/flattenTree.js'
import {sumNumbers} from '../Trees/sumNumbers.js'
import {convertToArray} from '../Trees/convertToArray.js'
import {countCompleteTreeNodes} from '../Trees/countCompleteTreeNodes.js'
import {lowestCommonAncestor2} from '../Trees/lowestCommonAncestor2.js'
import {convertToArray2} from '../Trees/convertToArray2.js'
import {zigzagLevelOrder} from '../Trees/zigzagLevelOrder.js'
import {getMinimumDifference} from '../Trees/getMinimumDifference.js'
import {numIslands} from '../Trees/numIslands.js'
import {solveSurroundedRegions} from '../Trees/solveSurroundedRegions.js'
import {evaluateDivision} from '../Trees/evaluateDivision.js'
import {canFinish} from '../Trees/canFinish.js'
import {snakesAndLadders} from '../Trees/snakesAndLadders.js'

import {subsets} from '../Backtracking/subsets.js'
import {findAllDuplicates} from '../Backtracking/findAllDuplicates.js'
import {letterCombinations} from '../Backtracking/letterCombinations.js'
import {combine} from '../Backtracking/combine.js'
import {permutations} from '../Backtracking/permutations.js'
import {combinationSum} from '../Backtracking/combinationSum.js'
import {totalNQueens} from '../Backtracking/lotalNQueens.js'
import {generateParenthesis} from '../Backtracking/generateParenthesis.js'

import {mergeSort} from '../Sorting/mergeSort.js'
import {randomInteger} from '../Sorting/randomInteger.js'
import {quickSort} from '../Sorting/quickSort.js'

import {NumMatrix} from '../Arrays/sum2DRegions.js'
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
import {reverseWords} from '../Arrays/reverseWords.js'
import {zigzagConversion} from '../Arrays/zigzagConversion.js'
import {findFirstOccurence} from '../Arrays/findFirstOccurence.js'
import {textJustification} from '../Arrays/textJustification.js'

import {isPalindrome} from '../TwoPointers/isPalidrome.js'
import {isSubsequence} from '../TwoPointers/isSubsequence.js'
import {longestPalindrome} from '../TwoPointers/longestPalindrome.js'

import {minSubArrayLen} from '../SlidingWindow/minSubArrayLen.js'
import {lengthOfLongestSubstring} from '../SlidingWindow/lengthOfLongestSubstring.js'
import {findSubstring} from '../SlidingWindow/findSubstring.js'
import {minWindow} from '../SlidingWindow/minWindow.js'
import {totalFruit} from '../SlidingWindow/totalFruit.js'
import {minFlips} from '../SlidingWindow/minFlips.js'

import {amountUniquePaths} from '../DynamicProgramming/amountUniquePaths.js'
import {fibonacci} from '../DynamicProgramming/fibonacci.js'

import {swapPairsList, pairLinkedList, removeNodesList, linkedList, unsortedLinkedList, shortLinkedList, linkedListWithDuplicates, l1, l2, l1Big, l2Big, linkedListWithRandomField, cycledList, cycledArray} from '../LinkedList/fixtures.js'
import {
  binaryTreeAncestor, snakesAndLaddersBoard, surroundedRegions, gridOfIslands, binaryTreeAncestorNode1, binaryTreeAncestorNode2, unbalancedBinaryTree, binaryTree, binaryTree2, unBalancedTree, tree, completeTree, subTree, searchBinaryTree, childSearchBinaryTreeNode1, childSearchBinaryTreeNode2, goodNodesTree, invalidSearchTree, graph, sumTree, arbitraryTree,
} from '../Trees/fixtures.js'
import {matrix} from '../Arrays/fixtures.js'

import {spiralOrder} from '../Matrix/spiralOrder.js'
import {rotate} from '../Matrix/rotate.js'
import {setZeros} from '../Matrix/setZeros.js'
import {gameOfLife} from '../Matrix/gameOfLife.js'

import {isAnagram} from '../HashMap/isAnagram.js'
import {isHappy} from '../HashMap/isHappy.js'
import {containsNearbyDuplicate} from '../HashMap/containsDuplicate2.js'

import {summaryRanges} from '../Intervals/summaryRanges.js'
import {insertInterval} from '../Intervals/insertInterval.js'
import {findMinArrowShots} from '../Intervals/findMinArrowShot.js'

import {simplifyPath} from '../Stack/simplifyPath.js'
import {evalPolish} from '../Stack/evalPolish.js'
import {basicCalc2} from '../Stack/basicCalc2.js'
import {basicCalc} from '../Stack/basicCalc.js'
import {removeStars} from '../Stack/removeStars.js'
import {validateStackSequence} from '../Stack/validateStackSequence.js'
import {removeKDigits} from '../Stack/removeKDigits.js'

import {buildTrie} from '../Trie/Trie.js'
import {findWords} from '../Trie/findWords.js'

import {board as trieBoard, words as trieWords} from '../Trie/fixtures.js'

import {sortList} from '../DivideAndConquer/sortList.js'
import {construct} from '../DivideAndConquer/construct.js'
import {maxSubarraySumCircular} from '../DivideAndConquer/maxSubarraySumCircular.js'

import {searchInsert} from '../BinarySearch/searchInsert.js'
import {searchMatrix} from '../BinarySearch/searchMatrix.js'
import {findPeakElement} from '../BinarySearch/findPeakElement.js'
import {searchRange} from '../BinarySearch/searchRange.js'
import {findMin} from '../BinarySearch/findMin.js'
import {findMedianSortedArrays} from '../BinarySearch/findMedianSortedArrays.js'
import {singleNonDuplicate} from '../BinarySearch/singleNonDuplicate.js'
import {shipWithinDays} from '../BinarySearch/shipWithinDays.js'

import {findKthLargest} from '../Heap/findKthLargest.js'
import {findMaximizedCapital} from '../Heap/findMaxmizedCapital.js'
import {kSmallestPairs} from '../Heap/kSmallestPairs.js'
import {medianFinder} from '../Heap/medianFinder.js'


export const tasks = new Map([
  ['------ Heap ------'],
  ['medianFinder', {func: medianFinder, args: []}],
  ['kSmallestPairs', {func: kSmallestPairs, args: [[1,1,2], [1,2,3], 2]}],
  ['findMaximizedCapital', {func: findMaximizedCapital, args: [2, 0, [1,2,3], [0,1,1]]}],
  ['findKthLargest', {func: findKthLargest, args: [[3,2,3,1,2,4,5,5,6], 3]}],
  ['------ Binary Search ------'],
  ['shipWithinDays', {func: shipWithinDays, args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5]}],
  ['singleNonDuplicate', {func: singleNonDuplicate, args: [[1,1,2,3,3,4,4,8,8]]}],
  ['findMedianSortedArrays', {func: findMedianSortedArrays, args: [[1,3], [2]]}],
  ['findMin', {func: findMin, args: [[3,1,2]]}],
  ['searchRange', {func: searchRange, args: [[5,7,7,8,8,10], 8]}],
  ['findPeakElement', {func: findPeakElement, args: [[1,2,1,5,3,6,4]]}],
  ['searchInsert', {func: searchInsert, args: [[1,3,5,6], 7]}],
  ['searchMatrix', {func: searchMatrix, args: [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 12]}],
  ['------ Linked list ------'],
  ['splitListToParts', {func: splitListToParts, args: [cloneDeep(swapPairsList), 5]}],
  ['sortLinkedLists', {func: sortLinkedLists, args: [cloneDeep(unsortedLinkedList)]}],
  ['swapPairs', {func: swapPairs, args: [cloneDeep(swapPairsList)]}],
  ['swapNodes', {func: swapNodes, args: [cloneDeep(linkedList), 2]}],
  ['pairSum', {func: pairSum, args: [cloneDeep(pairLinkedList)]}],
  ['removeNodes', {func: removeNodes, args: [cloneDeep(removeNodesList)]}],
  ['mergeInBetween', {func: mergeInBetween, args: [cloneDeep(linkedList), 1, 2, cloneDeep(l2Big)]}],
  ['reverseLinkedList', {func: reverseLinkedList, args: [cloneDeep(linkedList)]}],
  ['reverseLinkedListRecursion', {func: reverseLinkedListRecursion, args: [cloneDeep(linkedList)]}],
  ['findMiddle', {func: findMiddle, args: [cloneDeep(linkedList)]}],
  ['mergeTwoSortedLists', {func: mergeTwoLists, args: [cloneDeep(l1), cloneDeep(l2)]}],
  ['reorderList', {func: reorderList, args: [cloneDeep(linkedList)]}],
  ['removeNthFromEnd', {func: removeNthFromEnd, args: [cloneDeep(shortLinkedList), 1]}],
  ['copyRandomList', {func: copyRandomList, args: [linkedListWithRandomField]}],
  ['addTwoNumbers', {func: addTwoNumbers, args: [cloneDeep(l1Big), cloneDeep(l2Big)]}],
  ['hasCycle', {func: hasCycle, args: [cycledList]}],
  ['findDuplicate', {func: findDuplicate, args: [cycledArray]}],
  ['LRUCacheFunc', {func: LRUCacheFunc, args: []}],
  ['reverseBetween', {func: reverseBetween, args: [cloneDeep(linkedList), 2, 4]}],
  ['reverseKGroup', {func: reverseKGroup, args: [cloneDeep(linkedList), 2]}],
  ['deleterDuplicates', {func: deleteDuplicates, args: [cloneDeep(linkedListWithDuplicates)]}],
  ['partition', {func: partition, args: [cloneDeep(linkedList), 3]}],
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
  ['buildTreeFromPreorderAndInorder', {func: buildTreeFromPreorderAndInorder, args: [[3,9,20,15,7], [9,3,15,20,7]]}],
  ['buildTreeFromInorderAndPostOrder', {func: buildTreeFromInorderAndPostOrder, args: [[9,3,15,20,7], [9,15,7,20,3]]}],
  ['flattenTree', {func: flattenTree, args: [cloneDeep(binaryTree)]}],
  ['sumNumbers', {func: sumNumbers, args: [cloneDeep(binaryTree)]}],
  ['convertToArray', {func: convertToArray, args: [cloneDeep(binaryTree)]}],
  ['countCompleteTreeNodes', {func: countCompleteTreeNodes, args: [cloneDeep(completeTree)]}],
  ['lowestCommonAncestor2', {func: lowestCommonAncestor2, args: [cloneDeep(binaryTreeAncestor), binaryTreeAncestorNode1, binaryTreeAncestorNode2]}],
  ['convertToArray2', {func: convertToArray2, args: [cloneDeep(unbalancedBinaryTree)]}],
  ['zigzagLevelOrder', {func: zigzagLevelOrder, args: [cloneDeep(binaryTree)]}],
  ['getMinimumDifference', {func: getMinimumDifference, args: [cloneDeep(unbalancedBinaryTree)]}],
  ['numIslands', {func: numIslands, args: [cloneDeep(gridOfIslands)]}],
  ['solveSurroundedRegions', {func: solveSurroundedRegions, args: [cloneDeep(surroundedRegions)]}],
  ['evaluateDivision', {func: evaluateDivision, args: [[["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]], [3.0,4.0,5.0,6.0], [["x1","x5"],["x5","x2"],["x2","x4"]]]}],
  ['canFinish', {func: canFinish, args: [2, [[1,0], [0,1]]]}],
  ['snakesAndLadders', {func: snakesAndLadders, args: [snakesAndLaddersBoard]}],
  ['---- Backtracking ----'],
  ['subsets', {func: subsets, args: [[1, 2, 3]]}],
  ['fundAllDuplicates', {func: findAllDuplicates, args: [[4,3,2,7,8,2,3,1]]}],
  ['letterCombinations', {func: letterCombinations, args: ['23']}],
  ['combine', {func: combine, args: [4, 2]}],
  ['permutations', {func: permutations, args: [[1, 2, 3]]}],
  ['combinationSum', {func: combinationSum, args: [[2,3,6,7], 7]}],
  ['totalNQueens', {func: totalNQueens, args: [4]}],
  ['generateParenthesis', {func: generateParenthesis, args: [3]}],
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
  ['reverseWords', {func: reverseWords, args: ['a good   example']}],
  ['zigzagConversion', {func: zigzagConversion, args: ['PAYPALISHIRING', 3]}],
  ['findFirstOccurence', {func: findFirstOccurence, args: ['mississipi', 'issip']}],
  ['textJustification', {func: textJustification, args: [["What","must","be","acknowledgment","shall","be"], 16]}],
  ['----- Dynamic Programming -------'],
  ['amountUniquePaths', {func: amountUniquePaths, args: [4, 5]}],
  ['fibonacci', {func: fibonacci, args: [10]}],
  ['----- Two Pointers -------'],
  ['isPalidrome', {func: isPalindrome, args: ['A man, a plan, a canal: Panama']}],
  ['isSubsequence', {func: isSubsequence, args: ['abc', 'ahbgdc']}],
  ['longestPalindrome', {func: longestPalindrome, args: ['asdfghjk']}],
  ['----- Sliding Window ------'],
  ['minFlips', {func: minFlips, args: ['111000']}],
  ['totalFruit', {func: totalFruit, args: [[1,2,3,2,2]]}],
  ['minSubArrayLen', {func: minSubArrayLen, args: [7, [2,3,1,2,4,3]]}],
  ['lengthOfLongestSubstring', {func: lengthOfLongestSubstring, args: ['asdfgab']}],
  ['findSubstring', {func: findSubstring, args: ['barfoofoobarthefoobarman', ["bar","foo","the"]]}],
  ['minWindow', {func: minWindow, args: ['ADOBECODEBANC', 'ABC']}],
  ['----- Matrix ------'],
  ['spiralOrder', {func: spiralOrder, args: [[[1,2,3],[4,5,6],[7,8,9]]]}],
  ['rotate', {func: rotate, args: [[[1,2,3],[4,5,6],[7,8,9]]]}],
  ['setZeroes', {func: setZeros, args: [[[0,1,2,0],[3,4,5,2],[1,3,1,5]]]}],
  ['gameOfLife', {func: gameOfLife, args: [[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]]}],
  ['----- HashMap ------'],
  ['isAnagram', {func: isAnagram, args: ['rat', 'car']}],
  ['isHappy', {func: isHappy, args: [2]}],
  ['containsNearbyDuplicate', {func: containsNearbyDuplicate, args: [[1,2,3,1], 3]}],
  ['----- Intervals ------'],
  ['summaryRanges', {func: summaryRanges, args: [[0,1,2,4,5,7]]}],
  ['insertInterval', {func: insertInterval, args: [[[1,5]], [0,3]]}],
  ['findMinArrowShots', {func: findMinArrowShots, args: [[ [10,16], [2,8], [1,6], [7,12] ]]}],
  ['----- Stack ------'],
  ['removeKDigits', {func: removeKDigits, args: ['1432219', 3]}],
  ['validateStackSequence', {func: validateStackSequence, args: [[1, 2, 3, 4, 5], [4, 3, 5, 1, 2]]}],
  ['removeStars', {func: removeStars, args: ['leet**cod*e']}],
  ['simplifyPath', {func: simplifyPath, args: ['/a/./b/../../c/']}],
  ['evalPolish', {func: evalPolish, args: [['2', '1', '+', '3', '*']]}],
  ['basicCalc2', {func: basicCalc2, args: ['3+2*2']}],
  ['basicCalc', {func: basicCalc, args: ['(1+(4+5+2)-3)+(6+8)']}],
  ['----- Trie -------'],
  ['buildTrie', {func: buildTrie, args: []}],
  ['findWords', {func: findWords, args: [trieBoard, trieWords]}],
  ['----- Divide and Conquer'],
  ['sortList', {func: sortList, args: [unsortedLinkedList]}],
  ['construct', {func: construct, args: [[[0,1],[1,0]]]}],
  ['maxSubarraySumCircular', {func: maxSubarraySumCircular, args: [[5,-3,5]]}],
])
