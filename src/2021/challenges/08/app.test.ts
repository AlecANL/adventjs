import { expect, test } from 'vitest'
import { maxProfit } from './app'

test('Should return 16', () => {
  const arr = [39, 18, 29, 25, 34, 32, 5]
  const result = maxProfit(arr)
  expect(result).toBe(16)
})

test('Should return 60', () => {
  const arr = [10, 20, 30, 40, 50, 60, 70]
  const result = maxProfit(arr)
  expect(result).toBe(60)
})

test('Should return 3', () => {
  const arr = [1, 2, 3, 4]
  const result = maxProfit(arr)
  expect(result).toBe(3)
})

test('Should return -1', () => {
  const arr = [6, 5, 4, 3]
  const result = maxProfit(arr)
  expect(result).toBe(-1)
})

test('Should return -1', () => {
  const arr = [1, 1, 1]
  const result = maxProfit(arr)
  expect(result).toBe(-1)
})
