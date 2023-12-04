export function findNaughtyStep (original: string, modified: string) {
  function getChar (long: Array<string>, short: Array<string>) {
    const value = long.filter((char) => { return !short.includes(char) })
    return value[0]
  }

  if (original === modified) return ''

  const all = original.concat(modified)

  const originalArr = original.split('')
  const modifiedArr = modified.split('')

  if (modifiedArr.length > originalArr.length) {
    return getChar(modifiedArr, originalArr) || all[all.length - 1]
  }

  return getChar(originalArr, modifiedArr) || all[all.length - 1]
}

const original = 'abcd'
const modified = 'abcde'
const test031 = findNaughtyStep(original, modified) // 'e'
const test032 = findNaughtyStep('stepfor', 'stepor') // 'f'
const test033 = findNaughtyStep('abcde', 'abcde') // ''
const test034 = findNaughtyStep('!#"$SDFA*" asdf', 'abcde') // ''
const test035 = findNaughtyStep('iiiii', 'iiiiii') // ''

console.log(test031) //
console.log(test032) //
console.log(test033) //
console.log(test034) //
console.log(test035) //
