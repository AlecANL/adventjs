import { expect, test } from 'vitest'
import { decode } from './app'

test('Should return e', () => {
  const a = decode('hola (odnum)')
  expect(a).toBe('hola mundo')
})

test('Should return f', () => {
  const a = decode('(olleh) (dlrow)!')
  expect(a).toBe('hello world!')
})

test('Should return ""', () => {
  const a = decode('sa(u(cla)atn)s')
  expect(a).toBe('santaclaus')
})
