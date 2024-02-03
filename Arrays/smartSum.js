export function smartSum(...args) {
  let result = 0
  for (let arg of args) {
    result += Array.isArray(arg) ? smartSum(...arg) : arg
  }

  return result
}