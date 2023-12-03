import { expect, test } from 'vitest'
import { findFirstRepeated } from './app'

test('Should return 3', () => {
  const giftIds3 = [5, 1, 5, 1]
  const firstRepeatedId3 = findFirstRepeated(giftIds3)
  expect(firstRepeatedId3).toBe(5)
})

test('Should return 5', () => {
  const giftIds = [2, 1, 3, 5, 3, 2]
  const firstRepeatedId = findFirstRepeated(giftIds)
  expect(firstRepeatedId).toBe(3)
})

test('Should return -1', () => {
  const giftIds2 = [1, 2, 3, 4]
  const firstRepeatedId2 = findFirstRepeated(giftIds2)
  expect(firstRepeatedId2).toBe(-1)
})
