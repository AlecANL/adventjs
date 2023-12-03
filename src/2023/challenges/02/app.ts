export function manufacture (gifts: Array<string>, materials: string) {
  const pattern = new RegExp(`^(?=[${materials}]*$)`, 'gi')
  return gifts.filter(gift => pattern.test(gift))
}

export function manufacture2 (gifts: Array<string>, materials: string) {
  const pattern = new RegExp(`^(?=[${materials}]*$)`, 'gi')

  const giftsFound = []
  for (const gift of gifts) {
    if (pattern.test(gift)) {
      giftsFound.push(gift)
    }
  }

  return giftsFound
}
