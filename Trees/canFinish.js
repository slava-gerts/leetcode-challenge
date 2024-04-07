export function canFinish(numCourses, prerequisites) {
  const graph = new Map()
  const visited = new Set()
  const visiting = new Set()

  for (let [course, prereq] of prerequisites) {
    if (!graph.has(course)) graph.set(course, [])
    graph.get(course).push(prereq)
  }

  for (let course of graph.keys()) {
    if (!dfs(course)) return false
  }

  return true

  function dfs(course) {
    if (visited.has(course)) return true
    if (visiting.has(course)) return false

    visiting.add(course)

    for (let prereq of graph.get(course) || []) {
      if (!dfs(prereq)) return false
    }

    visiting.delete(course)
    visited.add(course)

    return true
  }
}