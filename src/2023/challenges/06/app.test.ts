import { expect, test } from 'vitest'
import { maxDistance, maxDistance2 } from './app'

test('Should return 2', () => {
  const test601 = maxDistance('>>*<')
  expect(test601).toBe(2)
})

test('Should return 5', () => {
  const test602 = maxDistance('<<<<<')
  expect(test602).toBe(5)
})

test('Should return 5', () => {
  const test603 = maxDistance('>***>')
  expect(test603).toBe(5)
})

test('Should return 10', () => {
  const test604 = maxDistance('**********')
  expect(test604).toBe(10)
})

test('Should return 2', () => {
  const test605 = maxDistance('<<**>>')
  expect(test605).toBe(2)
})

test('Should return 2', () => {
  const test6011 = maxDistance2('<<**>>')
  expect(test6011).toBe(2)
})
