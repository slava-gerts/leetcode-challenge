export function shipWithinDays(weights, days) {
  let left = Math.max(...weights)
  let right = weights.reduce((acc, curr) => acc + curr, 0)

  const canShip = (capacity) => {
    let curDays = 1
    let currWeight = 0

    for (const weight of weights) {
      if (currWeight + weight > capacity) {
        curDays++
        currWeight = 0
      }

      currWeight += weight
    }

    return curDays <= days
  }

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    if (canShip(mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}