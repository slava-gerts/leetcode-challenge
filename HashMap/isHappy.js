export function isHappy(n) {
  const visited = {}
  
  while (n !== 1) {
      let strN = String(n).split('')
      n = 0
      for (let char of strN) {
          n += Math.pow(Number(char), 2)
      }

      if (visited[n]) return false
      visited[n] = true
  }

  return true
};