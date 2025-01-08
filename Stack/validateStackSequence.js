export function validateStackSequence(pushed, popped) {
  const stack = []
  let popIndex = 0

  for (let num of pushed) {
    stack.push(num)

    while (stack.length > 0 && stack[stack.length - 1] === popped[popIndex]) {
      stack.pop()
      popIndex++
    }
  }

  return popped.length === popIndex
}