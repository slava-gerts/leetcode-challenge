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

import {linkedList, l1, l2, l1Big, l2Big, linkedListWithRandomField, cycledList, cycledArray} from '../LinkedList/fixtures.js'
import {binaryTree, binaryTree2} from '../Trees/fixtures.js'

export const tasks = new Map([
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
  ['----------------'],
  ['invertTree', {func: invertTree, args: [cloneDeep(binaryTree)]}],
  ['maxDepth', {func: maxDepth, args: [cloneDeep(binaryTree2)]}]
])
