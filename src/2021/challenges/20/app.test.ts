import { expect, test } from 'vitest'
import { pangram } from './app'

test('Should return true', () => {
  const result = pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
  expect(result).toBe(true)
})

test('Should return true', () => {
  const result = pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true
  expect(result).toBe(true)
})

test('Should return false', () => {
  const result = pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
  expect(result).toBe(false)
})

test('Should return false', () => {
  const result = pangram('De la a a la z, nos faltan letras') // false
  expect(result).toBe(false)
})
