import { expect, test } from 'vitest'
import { countPackages } from './app'

test('Should return 9', () => {
  const carriers = [
    ['dapelu', 5, ['midu', 'jelowing']],
    ['midu', 2, []],
    ['jelowing', 2, []]
  ]

  const result = countPackages(carriers, 'dapelu') // 9
  // 5 de dapelu, 2 de midu y 2 de jelowing = 9
  expect(result).toBe(9)
})

test('Should return 15', () => {
  const carriers2 = [
    ['lolivier', 8, ['camila', 'jesuspoleo']],
    ['camila', 5, ['sergiomartinez', 'conchaasensio']],
    ['jesuspoleo', 4, []],
    ['sergiomartinez', 4, []],
    ['conchaasensio', 3, ['facundocapua', 'faviola']],
    ['facundocapua', 2, []],
    ['faviola', 1, []]
  ]

  const result = countPackages(carriers2, 'camila') // 15
  expect(result).toBe(15)
})

test('Should return 27', () => {
  const carriers2 = [
    ['lolivier', 8, ['camila', 'jesuspoleo']],
    ['camila', 5, ['sergiomartinez', 'conchaasensio']],
    ['jesuspoleo', 4, []],
    ['sergiomartinez', 4, []],
    ['conchaasensio', 3, ['facundocapua', 'faviola']],
    ['facundocapua', 2, []],
    ['faviola', 1, []]
  ]

  const result = countPackages(carriers2, 'lolivier') // 27
  expect(result).toBe(27)
})

test('Should return 1', () => {
  const carriers2 = [
    ['lolivier', 8, ['camila', 'jesuspoleo']],
    ['camila', 5, ['sergiomartinez', 'conchaasensio']],
    ['jesuspoleo', 4, []],
    ['sergiomartinez', 4, []],
    ['conchaasensio', 3, ['facundocapua', 'faviola']],
    ['facundocapua', 2, []],
    ['faviola', 1, []]
  ]

  const result = countPackages(carriers2, 'faviola') // 1
  expect(result).toBe(1)
})
