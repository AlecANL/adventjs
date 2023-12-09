function maxDistance (movements: string) {
  let right = 0
  let left = 0
  let neutral = 0

  for (let i = 0; i < movements.length; i++) {
    if (movements[i] === '>') right++
    if (movements[i] === '<') left++
    if (movements[i] === '*') neutral++
  }
  return Math.abs(right - left) + neutral
}

function maxDistance2 (movements: string) {
  const right = movements.replace(/>|\*/g, '').length
  const left = movements.replace(/<|\*/g, '').length
  const neutral = movements.replace(/<|>/g, '').length

  return Math.abs(right - left) + neutral
}

const test601 = maxDistance('>>*<')
const test602 = maxDistance('<<<<<')
const test603 = maxDistance('>***>')
const test604 = maxDistance('**********')
const test605 = maxDistance('<<**>>')
const test6011 = maxDistance2('<<**>>')

console.log(test601) // 2
console.log(test602) // 5
console.log(test603) // 5
console.log(test604) // 10
console.log(test605) // 2
console.log(test6011) // 2
