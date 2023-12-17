import { expect, test } from 'vitest'
import { shouldBuyFidelity } from './app'

test('Should return false', () => {
  const result = shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
  expect(result).toBe(false)
})

test('Should return true', () => {
  const result = shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad
  expect(result).toBe(true)
})

test('Should return false', () => {
  const result = shouldBuyFidelity(3)
  expect(result).toBe(false)
})
