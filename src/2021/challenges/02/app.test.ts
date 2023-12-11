import { expect, test } from 'vitest'
import { listGifts } from './app'

test(`Should return {
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}`, () => {
  const carta = 'bici coche balón _playstation bici coche peluche'
  const gifts = listGifts(carta)

  expect(gifts).toEqual({
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1
  })
})

test(`Should return {
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}`, () => {
  const carta = 'bici coche balón _playstation bici  coche    peluche'
  const gifts = listGifts(carta)

  expect(gifts).toEqual({
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1
  })
})

test(`Should return {
  a: 2,
  b: 2,
  c: 2,
  m: 1
}`, () => {
  const carta = '_bici _ a m __ b c a b c '
  const gifts = listGifts(carta)

  expect(gifts).toEqual({
    a: 2,
    b: 2,
    c: 2,
    m: 1
  })
})

/*
bici coche balón _playstation bici coche peluche
_bici _ a m __ b c a b c
*/
