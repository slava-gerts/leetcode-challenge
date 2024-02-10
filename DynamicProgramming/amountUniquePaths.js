export function amountUniquePaths(n, m) {
  const helper = (n, m, arr) => {
    if (n < 1 || m < 1) return 0

    if (n === 1 && m === 1) return 1

    if (arr[n][m]) return arr[n][m]

    arr[n][m] = helper(n - 1, m, arr) + helper(n, m - 1, arr)

    return arr[n][m]
  }

  return helper(n, m, Array.from(Array(n + 1), () => Array(m + 1)))
}