var ListNode = function (val) {
  this.val = val
  this.prev = null
  this.next = null
}

/**
 * @param {string} homepage
 */
export var BrowserHistory = function(homepage) {
  const node = new ListNode(homepage)
  this.current = node
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  const node = new ListNode(url)
  this.current.next = node
  node.prev = this.current
  this.current = node
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  while (steps > 0 && this.current.prev) {
    this.current = this.current.prev
    steps--
  }

  return this.current.val
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  while (steps > 0 && this.current.next) {
    this.current = this.current.next
    steps--
  }

  return this.current.val
};

const history = new BrowserHistory('leetcode.com')
console.log(history.visit('google.com'))
console.log(history.visit('facebook.com'))
console.log(history.visit('youtube.com'))
console.log(history.back(1))
console.log(history.back(1))
console.log(history.forward(1))
console.log(history.visit('linkedin.com'))
console.log(history.forward(2))
console.log(history.back(2))
console.log(history.back(7))