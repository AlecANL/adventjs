export function organizeGifts (gifts: string) {
  const pattern = /\d+[a-zA-Z]/g
  const intPattern = /\d+/g
  const charPattern = /[a-zA-Z]/g
  const REMAINDER_BY_5 = 5
  const REMAINDER_BY_10 = 10
  let result = ''

  const splitGifts = gifts.match(pattern) ?? []

  for (const gift of splitGifts) {
    const int = Number(gift.replace(charPattern, ''))
    const char = gift.replace(intPattern, '')

    const rawTotalBoxes = (int / REMAINDER_BY_10)
    const totalBoxes = (rawTotalBoxes ** 2) ** 0.5
    const rawPallets = (totalBoxes / REMAINDER_BY_5)
    const pallets = (rawPallets ** 2) ** 0.5
    const boxes = totalBoxes % REMAINDER_BY_5
    const bag = int % REMAINDER_BY_10

    result += `[${char}]`.repeat(pallets)
    result += `{${char}}`.repeat(boxes)
    result += `(${char.repeat(bag)})`
  }

  return result.replace(/\(\)/g, '')
}
