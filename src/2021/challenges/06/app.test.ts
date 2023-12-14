import { expect, test } from 'vitest'
import { sumPairs } from './app'

test('Should return [3, 7]', () => {
  const result = sumPairs([3, 5, 7, 2], 10) // [3, 7]
  expect(result).toEqual([3, 7])
})

test('Should return null', () => {
  const result = sumPairs([-3, -2, 7, -5], 10) // null
  expect(result).toBeNull()
})

test('Should return [2, 2]', () => {
  const result = sumPairs([2, 2, 3, 1], 4) // [2, 2]
  expect(result).toEqual([2, 2])
})

test('Should return [6, 2]', () => {
  const result = sumPairs([6, 7, 1, 2], 8) // [6, 2]
  expect(result).toEqual([6, 2])
})

test('Should return [1, 5]', () => {
  const result = sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]
  expect(result).toEqual([1, 5])
})
