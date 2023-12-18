export function wrapGifts (gifts: Array<string>) {
  if (gifts.length <= 0) return []

  const wrapped = []
  const lengthWrap = (gifts[0].length ?? 0) + 2
  const lengthGift = lengthWrap - (gifts[0].length ?? 0) - 1
  const SYMBOL = '*'
  const BLOCK_WRAPPED = SYMBOL.repeat(lengthWrap)

  wrapped.push(BLOCK_WRAPPED)

  for (const gift of gifts) {
    const sideWrap = SYMBOL.repeat(lengthGift)
    const giftWrapped = sideWrap + gift + sideWrap
    wrapped.push(giftWrapped)
  }

  wrapped.push(BLOCK_WRAPPED)
  return wrapped
}
