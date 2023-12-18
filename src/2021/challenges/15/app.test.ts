import { expect, test } from 'vitest'
import { checkSledJump } from './app'

test('Should return true', () => {
  const result = checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
  expect(result).toBe(true)
})

test('Should return true', () => {
  const result = checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
  expect(result).toBe(true)
})

test('Should return true', () => {
  const result = checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
  expect(result).toBe(true)
})

test('Should return true', () => {
  const result = checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta
  expect(result).toBe(true)
})

test('Should return false', () => {
  const result = checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
  expect(result).toBe(false)
})

test('Should return false', () => {
  const result = checkSledJump([1, 2, 3]) // false: sólo sube
  expect(result).toBe(false)
})

test('Should return false', () => {
  const result = checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!
  expect(result).toBe(false)
})
