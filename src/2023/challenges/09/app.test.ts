import { expect, test } from 'vitest'
import { adjustLights } from './app'

test('Should return 1', () => {
  const test081 = adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
  expect(test081).toBe(1)
})

test('Should return 2', () => {
  const test081 = adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
  expect(test081).toBe(2)
})

test('Should return 0', () => {
  const test081 = adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
  expect(test081).toBe(0)
})

test('Should return 1', () => {
  const test081 = adjustLights(['🔴', '🔴', '🔴'])
  expect(test081).toBe(1)
})

test('Should return 2', () => {
  const test081 = adjustLights(['🔴', '🔴', '🟢', '🟢', '🟢'])
  expect(test081).toBe(2)
})

test('Should return 2', () => {
  const test081 = adjustLights(['🟢', '🔴', '🔴', '🟢', '🔴', '🟢', '🔴', '🟢', '🔴'])
  expect(test081).toBe(2)
})
