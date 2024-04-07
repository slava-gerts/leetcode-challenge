export function evaluateDivision (equations, values, queries) {
  const graph = new Map()

  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i]
    const val = values[i]

    if (!graph.has(a)) {
      graph.set(a, new Map())
    }

    if (!graph.has(b)) {
      graph.set(b, new Map())
    }

    graph.get(a).set(b, val)
    graph.get(b).set(a, 1 / val)
  }

  const dfs = (a, b, graph, visited) => {
    if (a === b) return 1

    visited.add(a)

    for (let [neighbor, val] of graph.get(a).entries()) {
      if (!visited.has(neighbor)) {
        const res = dfs(neighbor, b, graph, visited)
        if (res !== -1) {
          return res * val
        }
      }
    }

    return -1
  }

  const result = []

  for (let i = 0; i < queries.length; i++) {
    const [a, b] = queries[i]

    if (!graph.has(a) || !graph.has(b)) {
      result.push(-1)
    } else {
      const visited = new Set()
      const res = dfs(a, b, graph, visited)

      result.push(res)
    }
  }

  return result
}
