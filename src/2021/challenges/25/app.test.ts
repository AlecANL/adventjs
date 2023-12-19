import { expect, test } from 'vitest'
import { canMouseEat } from './app'

test('Should return false', () => {
  const result = canMouseEat('up', room) // false
  expect(result).toBe(false)
})

test('Should return true', () => {
  const result = canMouseEat('down', room) // true
  expect(result).toBe(true)
})

test('Should return false', () => {
  const result = canMouseEat('right', room) // false
  expect(result).toBe(false)
})

test('Should return false', () => {
  const result = canMouseEat('left', room) // false
  expect(result).toBe(false)
})

test('Should return false', () => {
  const result = canMouseEat('up', room2) // false
  expect(result).toBe(false)
})

test('Should return false', () => {
  const result = canMouseEat('down', room2) // false
  expect(result).toBe(false)
})

test('Should return true', () => {
  const result = canMouseEat('right', room2) // true
  expect(result).toBe(true)
})

test('Should return false', () => {
  const result = canMouseEat('left', room2) // false
  expect(result).toBe(false)
})

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]
