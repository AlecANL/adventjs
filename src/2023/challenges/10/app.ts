export function createChristmasTree (ornaments: string, height: number) {
  let tree = ''
  const N_ORNAMENTS = (height * (height + 1)) / 2
  const ORNAMENTS_CHAIN = ornaments.repeat(N_ORNAMENTS)
  const BREAK_LINE = '\n'
  const BLANK_SPACE = ' '
  const TRUNK_POSITION = (height - 1)
  const TRUNK = '|'
  const TRUNK_IN_TREE = BLANK_SPACE.repeat(TRUNK_POSITION) + TRUNK
  let idx = 0

  for (let key = 0; key < height; key++) {
    const level = key + 1
    const space = height - level

    const sequence = ORNAMENTS_CHAIN.slice(idx, idx + key + 1)
    const formatSequence = sequence.split('').join(' ')
    const currentBlankSpace = BLANK_SPACE.repeat(space)
    tree += `${currentBlankSpace}${formatSequence}` + BREAK_LINE
    idx += key + 1
  }

  return tree + TRUNK_IN_TREE + BREAK_LINE
}
