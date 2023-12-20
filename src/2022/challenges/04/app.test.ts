import { expect, test } from 'vitest'
import { fitsInOneBox } from './app'

test('Should return true', () => {
  const result = fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
  ]) // true

  expect(result).toBe(true)
})

test('Should return false', () => {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ]

  const result = fitsInOneBox(boxes) // false
  expect(result).toBe(false)
})

test('Should return true', () => {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]

  const result = fitsInOneBox(boxes) // true
  expect(result).toBe(true)
})
