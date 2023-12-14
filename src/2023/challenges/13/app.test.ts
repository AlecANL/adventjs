import { expect, test } from 'vitest'
import { calculateTime } from './app'

test('Should return -02:20:00', () => {
  const test = calculateTime(['00:10:00', '01:00:00', '03:30:00']) // '-02:20:00'
  expect(test).toBe('-02:20:00')
})

test('Should return 00:30:00', () => {
  const test = calculateTime(['02:00:00', '05:00:00', '00:30:00']) // '00:30:00'
  expect(test).toBe('00:30:00')
})

test('Should return -05:29:00', () => {
  const test = calculateTime([
    '00:45:00',
    '00:45:00',
    '00:00:30',
    '00:00:30'
  ]) // '-05:29:00'
  expect(test).toBe('-05:29:00')
})

test('Should return -00:30:00', () => {
  const test = calculateTime(['01:00:00', '05:00:00', '00:30:00']) // "-00:30:00"
  expect(test).toBe('-00:30:00')
})

test('Should return 05:02:01', () => {
  const test = calculateTime(['01:01:01', '09:59:59', '01:01:01']) // "05:02:01"
  expect(test).toBe('05:02:01')
})

test('Should return -00:00:01', () => {
  const test = calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58']) // "-00:00:01"
  expect(test).toBe('-00:00:01')
})
