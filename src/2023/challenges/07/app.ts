export function drawGift (size: number, symbol: string) {
  const BORDER_LINE = '#'
  const SPACE = ' '
  const BREAK_LINE = '\n'
  const DRAW_SIZE = Math.abs(size - 2)
  let topAngle = '\n'
  let bottomAngle = ''

  if (size === 1) return `${BORDER_LINE}${BREAK_LINE}`

  const top = SPACE.repeat(size - 1) + BORDER_LINE.repeat(size)
  const bottom = BORDER_LINE.repeat(size) + BREAK_LINE
  const center = BORDER_LINE.repeat(size) + symbol.repeat(DRAW_SIZE) + BORDER_LINE + BREAK_LINE

  for (let i = DRAW_SIZE; i > 0; i--) {
    const COUNT_SYMBOL_REPEATED = Math.abs(i - DRAW_SIZE)
    const firstAngle = `${SPACE.repeat(i)}`
    const secondAngle = `${symbol.repeat(DRAW_SIZE)}`
    const thirdAngle = `${symbol.repeat(Math.max(COUNT_SYMBOL_REPEATED, 0))}`

    const firstLine = `${firstAngle}${BORDER_LINE}${secondAngle}`
    const secondLine = `${BORDER_LINE}${thirdAngle}${BORDER_LINE}`

    topAngle += `${firstLine}${secondLine}` + `${BREAK_LINE}`
  }

  for (let i = 0; i < DRAW_SIZE; i++) {
    const COUNT_SYMBOL_REPEATED = Math.abs(i - DRAW_SIZE) - 1
    const firstAngle = `${symbol.repeat(DRAW_SIZE)}`
    const secondAngle = `${symbol.repeat(Math.max(COUNT_SYMBOL_REPEATED, 0))}`

    const firstLine = `${BORDER_LINE}${firstAngle}${BORDER_LINE}`
    const secondLine = `${secondAngle}${BORDER_LINE}`
    bottomAngle += `${firstLine}${secondLine}` + `${BREAK_LINE}`
  }

  return top + topAngle + center + bottomAngle + bottom
}
