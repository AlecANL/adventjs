import { expect, test } from 'vitest'
import { decodeNumber } from './app'

test('Should return 3', () => {
  const result = decodeNumber('...') // 3
  expect(result).toBe(3)
})

test('Should return 4', () => {
  const result = decodeNumber('.,') // 4 (5 - 1)
  expect(result).toBe(4)
})

test('Should return 6', () => {
  const result = decodeNumber(',.') // 6 (5 + 1)
  expect(result).toBe(6)
})

test('Should return 8', () => {
  const result = decodeNumber(',...') // 8 (5 + 3)
  expect(result).toBe(8)
})

test('Should return 107', () => {
  const result = decodeNumber('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
  expect(result).toBe(107)
})

test('Should return 49', () => {
  const result = decodeNumber('.;') // 49 (50 - 1)
  expect(result).toBe(49)
})

test('Should return 5', () => {
  const result = decodeNumber('..,') // 5 (-1 + 1 + 5)
  expect(result).toBe(5)
})

test('Should return 95', () => {
  const result = decodeNumber('..,!') // 95 (1 - 1 - 5 + 100)
  expect(result).toBe(95)
})

test('Should return 49', () => {
  const result = decodeNumber('.;!') // 49 (-1 -50 + 100)
  expect(result).toBe(49)
})

test('Should return 300', () => {
  const result = decodeNumber('!!!') // 300
  expect(result).toBe(300)
})

test('Should return 50', () => {
  const result = decodeNumber(';!') // 50
  expect(result).toBe(50)
})

test('Should return NaN', () => {
  const result = decodeNumber(';.W') // NaN
  expect(result).toBe(NaN)
})
