export function reverseWords(s) {
  let result = []

  const arr = s.split(' ')
  for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] !== '') result.push(arr[i])
  }

  return result.join(' ')
};