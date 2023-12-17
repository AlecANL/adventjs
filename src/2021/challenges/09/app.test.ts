import { expect, test } from 'vitest'
import { groupBy } from './app'

test('Should return { 6: [6.1, 6.3], 4: [4.2] }', () => {
  const result = groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
  expect(result).toEqual({ 6: [6.1, 6.3], 4: [4.2] })
})

test('Should return { 2013: [1363223700000], 2014: [1397639141184] }', () => {
  const result = groupBy(
    [1397639141184, 1363223700000],
    (timestamp: any) => new Date(timestamp).getFullYear()
  )
  expect(result).toEqual({ 2013: [1363223700000], 2014: [1397639141184] })
})

test('Should return { 23: [{age: 23}], 24: [{age: 24}] }', () => {
  const result = groupBy([{ age: 23 }, { age: 24 }], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }
  expect(result).toEqual({ 23: [{ age: 23 }], 24: [{ age: 24 }] })
})

test(`Should return {
  8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
  9: [{ title: 'Clean Code', rating: 9 }],
  10: [{ title: 'Aprendiendo Git', rating: 10 }]
}`, () => {
  const result = groupBy([
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 }
  ], 'rating')
  expect(result).toEqual({
    8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
    9: [{ title: 'Clean Code', rating: 9 }],
    10: [{ title: 'Aprendiendo Git', rating: 10 }]
  })
})

test('Should return { 3: [\'one\', \'two\'], 5: [\'three\'] } ', () => {
  const result = groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
  expect(result).toEqual({ 3: ['one', 'two'], 5: ['three'] })
})
