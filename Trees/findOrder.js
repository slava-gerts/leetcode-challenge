export function findOrder(numCourses, prerequisites) {
  // Build adjacency list
  const graph = new Map();
  for (let [course, prerequisite] of prerequisites) {
    if (!graph.has(course)) {
      graph.set(course, []);
    }
    graph.get(course).push(prerequisite);
  }

  // Track visited courses
  const visited = new Set();
  // Track courses in order
  const order = [];

  // DFS function
  function dfs(course) {
    // If the course is already visited, return
    if (visited.has(course)) {
      return;
    }

    // Mark the course as visited
    visited.add(course);

    // Explore prerequisites
    if (graph.has(course)) {
      for (let prerequisite of graph.get(course)) {
        dfs(prerequisite);
      }
    }

    // Add the course to the order
    order.push(course);
  }

  // Perform DFS for each course
  for (let course = 0; course < numCourses; course++) {
    dfs(course);
  }

  // If there is a cycle, return an empty array
  if (order.length !== numCourses) {
    return [];
  }

  // Reverse the order to get the correct sequence
  return order.reverse();
}