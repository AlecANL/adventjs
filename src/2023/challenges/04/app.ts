export function decode (message: string) {
  const helper = []
  let txt = ''

  for (const char of message) {
    if (char === '(') {
      helper.push(txt)
      txt = ''
    } else if (char === ')') {
      txt = helper.pop() + txt.split('').reverse().join('')
    }

    txt += char
  }

  return txt.replace(/\(|\)/g, '')
}
