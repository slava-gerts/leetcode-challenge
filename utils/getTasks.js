import {cloneDeep} from './cloneDeep.js'

import {reverseLinkedList, reverseLinkedListRecursion} from '../LinkedList/reverseLinkedList.js'
import {mergeTwoLists} from '../LinkedList/mergeTwoSortedLists.js'
import {reorderList} from '../LinkedList/reorderList.js'
import {findMiddle} from '../LinkedList/findMiddle.js'
import {removeNthFromEnd} from '../LinkedList/removeNthFromEnd.js'
import {copyRandomList} from '../LinkedList/copyRandomList.js'
import { addTwoNumbers } from '../LinkedList/addTwoNumbers.js'

import {linkedList, l1, l2, l1Big, l2Big, listWithRandomField} from '../LinkedList/fixtures.js'

export const tasks = new Map([
  ['reverseLinkedList', {func: reverseLinkedList, args: [cloneDeep(linkedList)]}],
  ['reverseLinkedListRecursion', {func: reverseLinkedListRecursion, args: [cloneDeep(linkedList)]}],
  ['findMiddle', {func: findMiddle, args: [cloneDeep(linkedList)]}],
  ['mergeTwoSortedLists', {func: mergeTwoLists, args: [cloneDeep(l1), cloneDeep(l2)]}],
  ['reorderList', {func: reorderList, args: [cloneDeep(linkedList)]}],
  ['removeNthFromEnd', {func: removeNthFromEnd, args: [cloneDeep(linkedList), 2]}],
  ['copyRandomList', {func: copyRandomList, args: [listWithRandomField]}],
  ['addTwoNumbers', {func: addTwoNumbers, args: [cloneDeep(l1Big), cloneDeep(l2Big)]}],
])
