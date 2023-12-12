import { expect, test } from 'vitest'
import { isValid } from './app'

test('Should return ✅', () => {
  const letter = 'bici coche (balón) bici coche peluche'
  const isLetterValid = isValid(letter)

  expect(isLetterValid).toBe(true)
})

test('Should return ❌', () => {
  const letter = 'bici coche (balón bici coche'
  const isLetterValid = isValid(letter)

  expect(isLetterValid).toBe(false)
})

test('Should return ✅', () => {
  const letter = '(muñeca) consola bici'
  const isLetterValid = isValid(letter)

  expect(isLetterValid).toBe(true)
})

test('Should return ❌', () => {
  const letter = 'peluche (bici [coche) bici coche balón'
  const isLetterValid = isValid(letter)

  expect(isLetterValid).toBe(false)
})

test('Should return ❌', () => {
  const letter = '(peluche {) bici'
  const isLetterValid = isValid(letter)

  expect(isLetterValid).toBe(false)
})

test('Should return ❌', () => {
  const letter = '() bici'
  const isLetterValid = isValid(letter)

  expect(isLetterValid).toBe(false)
})
