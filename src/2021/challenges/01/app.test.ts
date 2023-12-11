import { expect, test } from 'vitest'
import { countSheep } from './app'

test("Should return [{ name: 'Navidad', color: 'rojo' },{ name: 'Ki Na Ma', color: 'rojo' }]", () => {
  const sheepList = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
  ]

  const count = countSheep(sheepList)

  expect(count).toEqual([
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' }
  ])
})
