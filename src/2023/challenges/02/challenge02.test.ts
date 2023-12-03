import { expect, test } from 'vitest'
import { manufacture } from './app'

test('Should return ["tren", "oso"]', () => {
  const gifts = ['tren', 'oso', 'pelota']
  const materials = 'tronesa'

  const test201 = manufacture(gifts, materials)
  expect(test201).toEqual(['tren', 'oso'])
})

test('Should return ["puzzle"]', () => {
  const gifts = ['juego', 'puzzle']
  const materials = 'jlepuz'

  const test201 = manufacture(gifts, materials)
  expect(test201).toEqual(['puzzle'])
})

test('Should return []', () => {
  const gifts = ['libro', 'ps5']
  const materials = 'psli'

  const test201 = manufacture(gifts, materials)
  expect(test201).toEqual([])
})
