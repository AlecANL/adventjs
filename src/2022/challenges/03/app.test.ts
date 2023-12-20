import { expect, test } from 'vitest'
import { distributeGifts } from './app'

test('Should return 2', () => {
  const packOfGifts = ['book', 'doll', 'ball']
  const reindeers = ['dasher', 'dancer']

  // pack weights 4 + 4 + 4 = 12
  // reindeers can carry (2 * 6) + (2 * 6) = 24
  const result = distributeGifts(packOfGifts, reindeers) //

  expect(result).toBe(2)
})
