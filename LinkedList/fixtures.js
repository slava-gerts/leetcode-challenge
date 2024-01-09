export const linkedList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        }
      }
    }
  }
}

export const l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    }
  }
}

export const l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    }
  }
}

export const l1Big = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 9,
              next: null
            }
          }
        }
      }
    }
  }
}

export const l2Big = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: null
      }
    }
  }
}

export const cycledList = (function() {
  const lastNode = {val: -4, next: null}

  const list = {
    val: 3,
    next: {
      val: 2,
      next: {
        val: 0,
        next: lastNode,
      }
    }
  }

  lastNode.next = list

  return list
})()

export const l2Items = {
  val: 1,
  next: {
    val: 2,
    next: null
  }
}

export const linkedListWithRandomField = (function() {
  const list = {
    val: 7,
    next: {
      val: 13,
      next: {
        val: 11,
        next: {
          val: 10,
          next: {
            val: 1,
            next: null,
          }
        }
      }
    }
  }

  const linksToRandomFields = [null, 0, 4, 2, 0]
  const listToStack = []
  let curr = list
  while (curr) {
    listToStack.push(curr)
    curr = curr.next
  }

  linksToRandomFields.forEach((value, index) => {
    const randomValue = value != null ? listToStack[value] : null
    listToStack[index].random = randomValue
  })

  return list
})()