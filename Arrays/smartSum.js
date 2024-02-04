export function smartSum(...args) {
  let result = 0
  for (let arg of args) {
    result += Array.isArray(arg) ? smartSum(...arg) : arg
  }

  return result
}

// export function smartSum(...args) {
//   let result = 0

//   const queue = [args[0]]
//   let index = 1
//   while (queue.length) {
//     const item = queue.shift()
//     if (Array.isArray(item)) {
//       queue.push(...item)
//     } else {
//       result += item
//       if (index < args.length) {
//         queue.push(args[index])
//         index ++
//       }
//     }
//   }

//   return result
// }