export function drawGift (size: number, symbol: string) {
  const LINES = '#'
  const SPACE = ' '
  if (size === 1) return '#\n'
  const x = Math.abs(size - 2)
  let b = '\n'
  let c = ''

  const top = SPACE.repeat(size - 1) + LINES.repeat(size)
  const bottom = LINES.repeat(size) + '\n'
  const center = LINES.repeat(size) + symbol.repeat(x) + LINES + '\n'

  for (let i = x; i > 0; i--) {
    const c = Math.abs(i - x)
    b += `${SPACE.repeat(i)}${LINES}${symbol.repeat(x)}${LINES}${c > 0 ? symbol.repeat(c) : ''}${LINES}` + '\n'
  }

  for (let i = 0; i < x; i++) {
    const t = Math.abs(i - x) - 1
    c += `${LINES}${symbol.repeat(x)}${LINES}${t > 0 ? symbol.repeat(t) : ''}${LINES}` + '\n'
  }

  const result = top + b + center + c + bottom

  return result
}
