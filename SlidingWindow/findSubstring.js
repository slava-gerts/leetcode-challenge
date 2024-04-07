export function findSubstring(s, words) {
  let result = []
  let pattern = {}
  let wordLength = words[0].length

  for (const word of words) {
      pattern[word] = (pattern[word] || 0) + 1
  }

  for (let i = 0; i < wordLength; i++) {
      let back = i,
          front = back + wordLength,
          matches = {},
          count = 0

      while (front <= s.length) {
          let word = s.slice(front - wordLength, front);

          if (pattern[word]) {
              matches[word] = (matches[word] ?? 0) + 1;
              count++;

              while (matches[word] > pattern[word]) {
                  matches[s.slice(back, back + wordLength)] -= 1;
                  back += wordLength;
                  count--;
              }

              if (count === words.length) {
                  result.push(back)
              }                
          } else {
              matches = {}
              count = 0;
              back = front;
          }

          front += wordLength;
      }
  }

  return result;
}

function findSubstring2(s, words) {
    const result = []

    const map = {}
    for (let word of words) {
        map[word] = (map[word] || 0) + 1
    }

    const wordLength = words[0].length
    for (let i = 0; i < wordLength; i++) {
        let leftPointer = i
        let rightPointer = i + wordLength
        const seen = {}
        let count = 0

        while (rightPointer <= s.length) {
            const word = s.slice(rightPointer - wordLength, rightPointer)

            if (map[word]) {
                seen[word] = (seen[word] || 0) + 1
                count++

                while (seen[word] > map[word]) {
                    seen[s.slice(leftPointer, leftPointer + wordLength)] -= 1
                    leftPointer += wordLength
                    count--
                }

                if (count === words.length) {
                    result.push(leftPointer)
                }
            } else {
                seen = {}
                count = 0
                leftPointer = rightPointer
            }

            rightPointer += wordLength
        }
    }

    return result
}