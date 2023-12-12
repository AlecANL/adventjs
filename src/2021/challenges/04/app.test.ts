import { expect, test } from 'vitest'
import createXmasTree from './app'

test(`Should return 
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
`, () => {
  const tree = createXmasTree(5)
  expect(tree).toBe('____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____')
})

test(`Should return 
__*__
_***_
*****
__#__
__#__
`, () => {
  const tree = createXmasTree(3)
  expect(tree).toBe('__*__\n_***_\n*****\n__#__\n__#__')
})

test(`Should return
_*_
***
_#_
_#_
`, () => {
  const tree = createXmasTree(2)
  expect(tree).toBe('_*_\n***\n_#_\n_#_')
})
