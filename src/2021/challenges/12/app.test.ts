import { expect, test } from 'vitest'
import { getMinJump } from './app'

test('Should return 4', () => {
  const obstacles = [5, 3, 6, 7, 9]
  const result = getMinJump(obstacles) // -> 4
  expect(result).toBe(4)
})

test('Should return 7', () => {
  const obstacles = [2, 4, 6, 8, 10]
  const result = getMinJump(obstacles) // -> 7
  expect(result).toBe(7)
})
