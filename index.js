import {reverseLinkedList, reverseLinkedListRecursion} from './LinkedList/reverseLinkedList.js'
import {linkedList} from './LinkedList/fixtures.js'

const button = document.getElementById('button')
const code = document.getElementById('code')

button.onclick = function() {
  //console.log(reverseLinkedList(linkedList))
  const result = reverseLinkedListRecursion(linkedList)

  code.innerHTML = JSON.stringify(result, null, 2)
}