import { expect, test } from 'vitest'
import { organizeGifts } from './app'

test('Should return [a]{a}{a}(aaaaaa){b}(b)', () => {
  const test081 = organizeGifts('76a11b')
  expect(test081).toBe('[a]{a}{a}(aaaaaa){b}(b)')
})

test('Should return {a}{a}', () => {
  const test082 = organizeGifts('20a')
  expect(test082).toBe('{a}{a}')
})

test('Should return [b]{b}{b}[a][a]{a}{a}(cccc)', () => {
  const test083 = organizeGifts('70b120a4c')
  expect(test083).toBe('[b]{b}{b}[a][a]{a}{a}(cccc)')
})

test('Should return (ccccccccc)', () => {
  const test083 = organizeGifts('9c')
  expect(test083).toBe('(ccccccccc)')
})

test('Should return {d}(ddddddddd)[e](e)', () => {
  const test083 = organizeGifts('19d51e')
  expect(test083).toBe('{d}(ddddddddd)[e](e)')
})
