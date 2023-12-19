import { expect, test } from 'vitest'
import { canReconfigure } from './app'

test('Should return true', () => {
  const from = 'BAL'
  const to = 'LIB'
  const result = canReconfigure(from, to) // true
  /* la transformación sería así:
  B -> L
  A -> I
  L -> B
  */
  expect(result).toBe(true)
})

test('Should return false', () => {
  const from = 'CON'
  const to = 'JUU'
  const result = canReconfigure(from, to) // false
  /* no se puede hacer la transformación:
    C -> J
    O -> U
    N -> FALLO
    */
  expect(result).toBe(false)
})

test('Should return false', () => {
  const from = 'XBOX'
  const to = 'XXBO'
  const result = canReconfigure(from, to) // false
  /* no se puede hacer la transformación:
  X -> X
  B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra)
  O -> B
  X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
  */
  expect(result).toBe(false)
})

test('Should return true', () => {
  const from = 'XBOX'
  const to = 'XOBX'
  const result = canReconfigure(from, to) // true
  expect(result).toBe(true)
})

test('Should return false', () => {
  const from = 'MMM'
  const to = 'MID'
  const result = canReconfigure(from, to) // false
  /* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/
  expect(result).toBe(false)
})

test('Should return false', () => {
  const from = 'AA'
  const to = 'MID'
  const result = canReconfigure(from, to) // false -> no tiene la misma longitud
  expect(result).toBe(false)
})
