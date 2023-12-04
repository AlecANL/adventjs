import { expect, test } from 'vitest'
import { findNaughtyStep } from './app'

test('Should return e', () => {
  const original = 'abcd'
  const modified = 'abcde'
  const test031 = findNaughtyStep(original, modified) // 'e'

  expect(test031).toBe('e')
})

test('Should return f', () => {
  const original = 'stepfor'
  const modified = 'stepor'
  const test032 = findNaughtyStep(original, modified) // 'f'
  expect(test032).toBe('f')
})

test('Should return ""', () => {
  const original = 'abcde'
  const modified = 'abcde'
  const test033 = findNaughtyStep(original, modified) // ''

  expect(test033).toBe('')
})

test('Should return i', () => {
  const original = 'iiiii'
  const modified = 'iiiiii'
  const test033 = findNaughtyStep(original, modified) // ''

  expect(test033).toBe('i')
})
