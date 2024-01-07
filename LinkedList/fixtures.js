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

export const l2Items = {
  val: 1,
  next: {
    val: 2,
    next: null
  }
}

const linkedListForRandom = {
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

const linksForRandom = [null, 0, 4, 2, 0]
const listToStack = []
let curr = linkedListForRandom
while (curr) {
  listToStack.push(curr)
  curr = curr.next
}

linksForRandom.forEach((value, index) => {
  const randomValue = value != null ? listToStack[value] : null
  listToStack[index].random = randomValue
})

export const listWithRandomField = linkedListForRandom