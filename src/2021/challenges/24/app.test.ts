import { expect, test } from 'vitest'
import { checkIsSameTree } from './app'

test('Should return true', () => {
  const result = checkIsSameTree(tree, tree) // true
  expect(result).toBe(true)
})

test('Should return false', () => {
  const result = checkIsSameTree(tree, tree2) // false
  expect(result).toBe(false)
})

test('Should return true', () => {
  const result = checkIsSameTree(tree2, tree2) // true
  expect(result).toBe(true)
})

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}
