type GiftMapped = Record<string, number>

export function listGifts (letter: string) {
  const REGEX_INVALID_GIFT = /_/g
  const REGEX_REMOVE_EXTRA_WHITE_SPACE = /^\s+|\s+$|\s+(?=\s)/g
  const gifts = letter.replace(REGEX_REMOVE_EXTRA_WHITE_SPACE, '').split(' ')
  const giftMapped: GiftMapped = {}

  for (const gift of gifts) {
    if (REGEX_INVALID_GIFT.test(gift) || gift === '_') continue

    console.log(gift)

    if (giftMapped[gift]) {
      giftMapped[gift] += 1
      continue
    }

    giftMapped[gift] = 1
  }

  return giftMapped
}
