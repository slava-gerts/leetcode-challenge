export function longestCommonPrefix(strs) {
  let prefix = strs[0]

  for (let i = 1; i < strs.length; i++) {
    let str = strs[i]
    let index = 0
    let newPrefix = ''
    while (index < prefix.length && prefix[index] === str[index]) {
      newPrefix += prefix[index]
      index++
    }

    prefix = newPrefix
    if (prefix === '') break
  }

  return prefix
}