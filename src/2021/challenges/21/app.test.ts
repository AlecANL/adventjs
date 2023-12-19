import { expect, test } from 'vitest'
import { canCarry } from './app'

test('Should return false', () => {
  const result = canCarry(4, [[2, 5, 8], [3, 6, 10]]) // false
  // En el punto 5 recoge 2 regalos...
  // En el punto 6 recoge 3 regalos...
  // Del punto 6 al 8 tendría 5 regalos en total
  // Y su capacidad es 4... así que ¡no podría!
  expect(result).toBe(false)
})

test('Should return true', () => {
  const result = canCarry(3, [[1, 1, 5], [2, 2, 10]]) // true
  // En el punto 1 recoge 1 regalo...
  // En el punto 2 recoge 2 regalos...
  // En el punto 5 entrega 1 regalo...
  // En el punto 10 entrega 2 regalos...
  // ¡Sí puede! Nunca superó la carga máxima de 3 regalos
  expect(result).toBe(true)
})

test('Should return true', () => {
  const result = canCarry(3, [[2, 1, 5], [3, 5, 7]]) // true -> nunca supera el máximo de capacidad
  expect(result).toBe(true)
})

test('Should return true', () => {
  const result = canCarry(4, [[2, 3, 8], [2, 5, 7]]) // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo
  expect(result).toBe(true)
})

test('Should return false', () => {
  const result = canCarry(1, [[2, 3, 8]]) // false -> no podría ni con el primer viaje
  expect(result).toBe(false)
})

test('Should return false', () => {
  const result = canCarry(2, [[1, 2, 4], [2, 3, 8]]) // false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos
  expect(result).toBe(false)
})
