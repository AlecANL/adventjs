import { expect, test } from 'vitest'
import { daysToXmas } from './app'

test('Should return 1', () => {
  const date2 = new Date('Dec 24, 2021 00:00:01')
  const result = daysToXmas(date2) // 1
  expect(result).toBe(1)
})

test('Should return 24', () => {
  const date1 = new Date('Dec 1, 2021')
  const result = daysToXmas(date1) // 24
  expect(result).toBe(24)
})

test('Should return 1', () => {
  const date3 = new Date('Dec 24, 2021 23:59:59')
  const result = daysToXmas(date3) // 1
  expect(result).toBe(1)
})

test('Should return 5', () => {
  const date4 = new Date('December 20, 2021 03:24:00')
  const result = daysToXmas(date4) // 5
  expect(result).toBe(5)
})

test('Should return 0', () => {
  const date = new Date('Dec 25, 2021')
  const result = daysToXmas(date) // 0
  expect(result).toBe(0)
})

test('Should return -1', () => {
  const date1 = new Date('Dec 26, 2021')
  const result = daysToXmas(date1) // -1
  expect(result).toBe(-1)
})

test('Should return -6', () => {
  const date2 = new Date('Dec 31, 2021')
  const result = daysToXmas(date2) // -6
  expect(result).toBe(-6)
})

test('Should return -7', () => {
  const date3 = new Date('Jan 1, 2022 00:00:01')
  const result = daysToXmas(date3) // -7
  expect(result).toBe(-7)
})

test('Should return -7', () => {
  const date4 = new Date('Jan 1, 2022 23:59:59')
  const result = daysToXmas(date4) // -7
  expect(result).toBe(-7)
})

test('Should return 23', () => {
  const date4 = new Date('Dec 02, 2021 00:00:00')
  const result = daysToXmas(date4) // 23
  expect(result).toBe(23)
})
