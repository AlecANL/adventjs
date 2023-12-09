import { expect, test } from 'vitest'
import { drawGift } from './app'

test('Should return e', () => {
  const test071 = drawGift(4, '+')
  expect(test071).toBe('   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n')
})

test('Should return e', () => {
  const test071 = drawGift(5, '*')
  expect(test071).toBe('    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n')
})

test('Should return e', () => {
  const test071 = drawGift(1, '^')
  expect(test071).toBe('#\n')
})
