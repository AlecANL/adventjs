import { expect, test } from 'vitest'
import { wrapGifts } from './app'

test(`Should return ['******',
'*🏈🎸*',
'*🎮🧸*',
'******'
]`, () => {
  const result = wrapGifts(['🏈🎸', '🎮🧸'])
  expect(result).toEqual(['******',
    '*🏈🎸*',
    '*🎮🧸*',
    '******'
  ])
})

test(`Should return [ '****',
'*📷*',
'*⚽️*',
'****'
]`, () => {
  const result = wrapGifts(['📷', '⚽️'])
  expect(result).toEqual(['****',
    '*📷*',
    '*⚽️*',
    '****'
  ])
})

test(`Should return [ '****',
'*📷*',
'****'
]`, () => {
  const result = wrapGifts(['📷'])
  expect(result).toEqual(['****',
    '*📷*',
    '****'
  ])
})

test('Should return []', () => {
  const result = wrapGifts([])
  expect(result).toEqual([])
})
