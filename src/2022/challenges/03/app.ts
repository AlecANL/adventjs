export function distributeGifts (packOfGifts: Array<string>, reindeers: Array<string>) {
  const VALUE_TO_CALC_CARRIERS = 2

  const weightsGifts = packOfGifts.reduce((acc, current) => {
    return acc + current.length
  }, 0)

  const reindeersCarry = reindeers.reduce((acc, current) => {
    return acc + (VALUE_TO_CALC_CARRIERS * current.length)
  }, 0)

  return Math.floor(reindeersCarry / weightsGifts)
}
