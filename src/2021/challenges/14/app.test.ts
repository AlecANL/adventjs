import { expect, test } from 'vitest'
import { missingReindeer } from './app'

test('Should return 1', () => {
  const result = missingReindeer([0, 2, 3]) // -> 1
  expect(result).toBe(1)
})

test('Should return 4', () => {
  const result = missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
  expect(result).toBe(4)
})

test('Should return 2', () => {
  const result = missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
  expect(result).toBe(2)
})

test('Should return 2', () => {
  const result = missingReindeer([3, 0, 1]) // -> 2
  expect(result).toBe(2)
})

test('Should return 8', () => {
  const result = missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
  expect(result).toBe(8)
})

test('Should return 1', () => {
  const result = missingReindeer([0]) // -> 1 (¡es el último el que falta!)
  expect(result).toBe(1)
})
