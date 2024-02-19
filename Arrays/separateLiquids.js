export function separateLiquids(glass) {
  if (glass.length === 0) return []
  
  const densities = {
    'H': 1.36,
    'W': 1,
    'A': 0.87,
    'O': 0.8,
  }
  
  const flatArray = glass.reduce((acc, row) => {
    return acc.concat(row)
  }, [])

  flatArray.sort((a,b) => densities[a] - densities[b])

  const result = []
  const width = flatArray.length / glass.length
  for (let i = 0; i < flatArray.length; i += width) {
    result.push(flatArray.slice(i, i + width))
  }

  return result;
}