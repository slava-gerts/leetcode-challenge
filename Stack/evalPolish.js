export function evalPolish(tokens) {
  if (tokens.length === 0) return 0

    const stack = []
    for (let operand of tokens) {
        let first, second
        if (['+', '-', '*', '/'].includes(operand)) {
            second = stack.pop()
            first = stack.pop()
        }

        switch (operand) {
            case '+':
                stack.push(first + second)
                break
            case '-':
                stack.push(first - second)
                break
            case '*':
                stack.push(first * second)
                break
            case '/':
                stack.push(Math.trunc(first / second))
                break
            default:
                stack.push(operand)
        }
    }

    return stack[0]
}