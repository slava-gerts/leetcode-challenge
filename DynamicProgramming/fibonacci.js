export function fibonacci(n) {

  const cache = [0, 1]

  const helper = (n, cache) => {
    if (n <= 1) {
      return n
    }

    if (n in cache) return cache[n]
  
    cache[n] = helper(n - 1, cache) + helper(n - 2, cache)
    return cache[n]
  }

  return helper(n, cache)
}