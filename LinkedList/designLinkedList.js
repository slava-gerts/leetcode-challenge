var ListNode = function(val, next) {
  this.val = val
  this.next = next || null
}

var MyLinkedList = function() {
  this.head = null
  this.tail = null
  this.size = 0
};

MyLinkedList.prototype.getNode = function(index) {
  if (index < 0 || index >= this.size) return null

  let curr = this.head
  for (let i = 0; i < index; i++) {
    curr = curr.next
  }

  return curr
}

MyLinkedList.prototype.get = function(index) {
  const node = this.getNode(index)
  return node ? node.val : -1
};

MyLinkedList.prototype.addAtHead = function(val) {
  const node = new ListNode(val, this.head)
  this.head = node
  if (this.size === 0) {
    this.tail = node
  }
  this.size++
};

MyLinkedList.prototype.addAtTail = function(val) {
  if (this.size === 0) {
    this.addAtHead(val)
    return
  }

  const node = new ListNode(val)
  this.tail.next = node
  this.tail = node
  this.size++
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index < 0 || index > this.size) return

  if (index === 0) {
    this.addAtHead(val)
    return
  }

  if (index === this.size) {
    this.addAtTail(val)
    return
  }

  const node = this.getNode(index - 1)
  const next = node.next
  const curr = new ListNode(val)

  node.next = curr
  curr.next = next
  this.size++
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.size) return

  if (index === 0) {
    this.head = this.size > 0 ? this.head.next : null
  } else if (index === this.size - 1) {
    let node = this.getNode(index - 1)
    this.tail = node
  } else {
    let node = this.getNode(index - 1)
    let curr = node.next
    let next = curr.next
    node.next = next
  }

  this.size--
};