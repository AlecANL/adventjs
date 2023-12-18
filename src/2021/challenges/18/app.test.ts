import { expect, test } from 'vitest'
import { fixFiles } from './app'

test('Should return  [\'photo\', \'postcard\', \'photo(1)\', \'photo(2)\', \'video\']', () => {
  const files = ['photo', 'postcard', 'photo', 'photo', 'video']
  const result = fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
  expect(result).toEqual(['photo', 'postcard', 'photo(1)', 'photo(2)', 'video'])
})

test('Should return  [\'file\', \'file(1)\', \'file(2)\', \'game\', \'game(1)\']', () => {
  const files2 = ['file', 'file', 'file', 'game', 'game']
  const result = fixFiles(files2) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']
  expect(result).toEqual(['file', 'file(1)', 'file(2)', 'game', 'game(1)'])
})

test('Should return [\'file\', \'file(1)\', \'icon\', \'icon(1)\', \'icon(1)(1)\']', () => {
// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
  const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
  const result = fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
  expect(result).toEqual(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)'])
})
