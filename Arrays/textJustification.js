export function textJustification(words, maxWidth) {
  if (words.length === 1) return [words[0] + ' '.repeat(maxWidth - words[0].length)]

  const result = []

  let index = 1
  let currentRow = [words[0]]
  let currentWidth = words[0].length
  while (index < words.length) {
      if ((currentWidth + currentRow.length + words[index].length) > maxWidth) {

          let delta = maxWidth - currentWidth
          let spaces = currentRow.length > 1 ? Math.floor(delta / (currentRow.length - 1)) : 0
          let extraSpaces = currentRow.length > 1 ? delta % (currentRow.length - 1) : delta
          let row = currentRow[0]
          for (let i = 1; i < currentRow.length; i++) { 
              row += ' '.repeat(spaces + (extraSpaces > 0 ? 1 : 0)) + currentRow[i]
              if (extraSpaces > 0) extraSpaces--
          }
          result.push(row + ' '.repeat(extraSpaces))

          currentRow = [words[index]]
          currentWidth = words[index].length
      } else {
          currentRow.push(words[index])
          currentWidth += words[index].length
      }

      index++
  }

    let lastLine = currentRow.join(' ')
    result.push(lastLine + ' '.repeat(maxWidth - lastLine.length))

    return result
}