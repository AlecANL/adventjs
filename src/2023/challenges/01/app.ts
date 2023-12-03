export function findFirstRepeated (gifts: Array<number>) {
  const giftMapped = new Map()

  for (const gift of gifts) {
    if (giftMapped.get(gift)) return gift
    giftMapped.set(gift, 1)
  }

  return -1
}
