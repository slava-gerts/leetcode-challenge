export function dijkstra(graph, start, end) {
  const findLowestDistance = () => {
    let lowestDistance = Infinity
    let lowestNode = null

    for (let node in distances) {
      if (!visited.has(node) && distances[node] < lowestDistance) {
        lowestDistance = distances[node]
        lowestNode = node
      }
    }

    return lowestNode
  }

  const distances = {}
  const visited = new Set()
  const path = {}

  for (let key in graph) {
    if (key !== start) {
      distances[key] = Infinity
    } else {
      distances[key] = 0
    }
  }

  let node = findLowestDistance()
  while (node) {
    const distance = distances[node]
    const neighbors = graph[node]

    for (const neighbor in neighbors) {
      const newDistance = distance + neighbors[neighbor]
      if (distances[neighbor] > newDistance) {
        distances[neighbor] = newDistance
        path[neighbor] = node
      }
    }

    visited.add(node)
    node = findLowestDistance()
  }

  const shortPath = {}
  let current = end
  while (current !== start) {
    shortPath[current] = distances[current]
    current = path[current]
  }

  return shortPath
}