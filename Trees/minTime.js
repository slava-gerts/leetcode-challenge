export function minTime(edges, hasApple) {
  const graph = new Array(hasApple.length).fill().map(() => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  function dfs(node, parent) {
    let totalTime = 0;

    for (const neighbor of graph[node]) {
      if (neighbor === parent) continue;
      const childTime = dfs(neighbor, node);
      if (childTime > 0 || hasApple[neighbor]) {
        totalTime += childTime + 2;
      }
    }

    return totalTime;
  }

  return dfs(0, -1);
}