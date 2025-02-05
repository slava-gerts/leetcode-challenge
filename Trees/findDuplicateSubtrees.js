export function findDuplicateSubtrees(root) {
  const map = new Map()
  const result = []

  const serialize = node => {
    if (!node) return '#'

    const key = `${node.val},${serialize(node.left)},${serialize(node.right)}`

    map.set(key, (map.get(key) || 0) + 1)

    if (map.get(key) === 2) {
      result.push(node)
    }

    return key
  }

  serialize(root)

  return result
}