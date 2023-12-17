import { expect, test } from 'vitest'
import { getCoins } from './app'

test('Should return [1, 0, 0, 0, 0, 1]', () => {
  const result = getCoins(51) // [1, 0, 0, 0, 0, 1]
  expect(result).toEqual([1, 0, 0, 0, 0, 1])
})

test('Should return [1, 1, 0, 0, 0, 0]', () => {
  const result = getCoins(3) // [1, 1, 0, 0, 0, 0]
  expect(result).toEqual([1, 1, 0, 0, 0, 0])
})

test('Should return [0, 0, 1, 0, 0, 0]', () => {
  const result = getCoins(5) // [0, 0, 1, 0, 0, 0]
  expect(result).toEqual([0, 0, 1, 0, 0, 0])
})

test('Should return [1, 0, 1, 1, 0, 0]', () => {
  const result = getCoins(16) // [1, 0, 1, 1, 0, 0]
  expect(result).toEqual([1, 0, 1, 1, 0, 0])
})

test('Should return [0, 0, 0, 0, 0, 2]', () => {
  const result = getCoins(100) // [0, 0, 0, 0, 0, 2]
  expect(result).toEqual([0, 0, 0, 0, 0, 2])
})
