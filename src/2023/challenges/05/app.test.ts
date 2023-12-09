import { expect, test } from 'vitest'
import { cyberReindeer } from './app'

test('Should return e', () => {
  const road = 'S..|...|..'
  const time = 10 // units of time
  const result = cyberReindeer(road, time)
  expect(result).toEqual([
    'S..|...|..', // initial state
    '.S.|...|..', // sled advances on the road
    '..S|...|..', // sled advances on the road
    '..S|...|..', // sled stops at the barrier
    '..S|...|..', // sled stops at the barrier
    '...S...*..', // barrier opens, sled advances
    '...*S..*..', // sled advances on the road
    '...*.S.*..', // sled advances on the road
    '...*..S*..', // sled advances on the road
    '...*...S..' // passes through the open barrier
  ])
})

test('Should return e', () => {
  const road = 'S.|.'
  const time = 4 // units of time
  const result = cyberReindeer(road, time)
  expect(result).toEqual([
    'S.|.',
    '.S|.',
    '.S|.',
    '.S|.'
  ])
})

test('Should return e', () => {
  const road = 'S.|.|.'
  const time = 7 // units of time
  const result = cyberReindeer(road, time)
  expect(result).toEqual([
    'S.|.|.',
    '.S|.|.',
    '.S|.|.',
    '.S|.|.',
    '.S|.|.',
    '..S.*.',
    '..*S*.'
  ])
})

test('Should return e', () => {
  const road = 'S.|..'
  const time = 6 // units of time
  const result = cyberReindeer(road, time)
  expect(result).toEqual([
    'S.|..',
    '.S|..',
    '.S|..',
    '.S|..',
    '.S|..',
    '..S..'
  ])
})

test('Should return e', () => {
  const road = 'S.|.|.|......|.||.........'
  const time = 8 // units of time
  const result = cyberReindeer(road, time)
  expect(result).toEqual([
    'S.|.|.|......|.||.........',
    '.S|.|.|......|.||.........',
    '.S|.|.|......|.||.........',
    '.S|.|.|......|.||.........',
    '.S|.|.|......|.||.........',
    '..S.*.*......*.**.........',
    '..*S*.*......*.**.........',
    '..*.S.*......*.**.........'
  ])
})
