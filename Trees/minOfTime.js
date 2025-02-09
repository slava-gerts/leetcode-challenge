export function minOfTime(n, headID, managers, informTime) {
  const graph = new Array(n).fill().map(() => [])
  for (let i = 0; i < n; i++) {
    if (managers[i] === -1) continue

    graph[managers[i]].push(i)
  }

  const dfs = node => {
    let maxTime = 0

    for (const item of graph[node]) {
      maxTime = Math.max(maxTime, dfs(item))
    }

    return maxTime + informTime[node]
  }

  return dfs(headID)
}