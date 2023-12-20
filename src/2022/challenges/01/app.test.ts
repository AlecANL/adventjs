import { expect, test } from 'vitest'
import { wrapping } from './app'

test(`Should return [
  '*****\n*cat*\n*****',
  '******\n*game*\n******',
  '*******\n*socks*\n*******'
]`, () => {
  const gifts = ['cat', 'game', 'socks']
  const wrapped = wrapping(gifts)

  expect(wrapped).toEqual([
    '*****\n*cat*\n*****',
    '******\n*game*\n******',
    '*******\n*socks*\n*******'
  ])
})
