export function insertInterval(intervals, newInterval) {
  const result = []
  let [newStart, newEnd] = newInterval
  let isInserted = false

  for (let [start, end] of intervals) {
      if (end < newStart) {
          result.push([start, end])
      } else if (start > newEnd) {
          if (!isInserted) {
              result.push([newStart, newEnd])
              isInserted = true
          }
          result.push([start, end])
      } else {
          newStart = Math.min(start, newStart)
          newEnd = Math.max(end, newEnd)
      }
  }
  
  if (!isInserted) result.push([newStart, newEnd])

  return result
};