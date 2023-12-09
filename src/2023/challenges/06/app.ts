export function maxDistance (movements: string) {
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

export function maxDistance2 (movements: string) {
  const right = movements.replace(/>|\*/g, '').length
  const left = movements.replace(/<|\*/g, '').length
  const neutral = movements.replace(/<|>/g, '').length

  return ((right - left) ** 2) ** 0.5 + neutral
}
