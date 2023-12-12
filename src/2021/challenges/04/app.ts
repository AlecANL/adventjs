export default function createXmasTree (height: number) {
  const SYMBOL = '*'
  const SYMBOLS_CHAIN = SYMBOL.repeat(height * height)
  const SPACE_SYMBOL = '_'
  const BREAK_LINE = '\n'
  const TRUNK_POSITION = height - 1
  const TRUNK = '#'
  const TRUNK_SPACE = SPACE_SYMBOL.repeat(TRUNK_POSITION)
  const TRUNK_IN_TREE = TRUNK_SPACE + TRUNK + TRUNK_SPACE
  let tree = ''

  for (let i = 0; i < height; i++) {
    const level = i + 1
    const space = height - level

    const spaceSequence = SPACE_SYMBOL.repeat(space)
    const sequence = spaceSequence + SYMBOLS_CHAIN.slice(i, level + i * 2) + spaceSequence + BREAK_LINE
    tree += sequence
  }

  return tree + TRUNK_IN_TREE + BREAK_LINE + TRUNK_IN_TREE
}
