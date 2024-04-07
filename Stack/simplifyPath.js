export function simplifyPath(path) {
  const dirs = path.split('/')

    const stack = []
    for (let dir of dirs) {
        if (dir === '.' || !dir) continue

        if (dir === '..') {
            if (stack.length > 0) stack.pop()
            continue
        }

        stack.push(dir)
    }

    return `/${stack.join('/')}`
};