import { expect, test } from 'vitest'
import { createChristmasTree } from './app'

test('Should return\n  x\n x x\nx x x\n  |\n', () => {
  const result = '  x\n x x\nx x x\n  |\n'
  const test101 = createChristmasTree('x', 3)
  expect(test101).toBe(result)
})

test('Should return\n    1\n   2 3\n  1 2 3\n 1 2 3 1\n2 3 1 2 3\n    |\n', () => {
  const result = '    1\n   2 3\n  1 2 3\n 1 2 3 1\n2 3 1 2 3\n    |\n'
  const test101 = createChristmasTree('123', 5)
  expect(test101).toBe(result)
})
