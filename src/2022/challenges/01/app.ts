export function wrapping (gifts: string[]) {
  const SYMBOL = '*'

  return gifts.map(gift => {
    const wordLength = gift.length
    const wrapped = SYMBOL.repeat(wordLength + 2)
    return `${wrapped}\n${SYMBOL}${gift}${SYMBOL}\n${wrapped}`
  })
}
