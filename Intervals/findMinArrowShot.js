export function findMinArrowShots(points) {
  if (!points || points.length === 0) return 0

    points.sort((a,b) => a[0] - b[0])

    const result = [points[0]]
    for (let i = 1; i < points.length; i++) {
        if (result[result.length - 1][1] >= points[i][0]) {
            result[result.length - 1][1] = Math.min(result[result.length - 1][1], points[i][1])
        } else {
            result.push(points[i])
        }
    }

    return result.length
};