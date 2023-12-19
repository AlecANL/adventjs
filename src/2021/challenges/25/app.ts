export function canMouseEat (direction: string, game: Array<Array<string>>) {
  let currentMouseBoard: Array<string> = []
  let mousePositionInMatrix = 0

  for (let i = 0; i < game.length; i++) {
    if (game[i].includes('m')) {
      currentMouseBoard = game[i]
      mousePositionInMatrix = i
      break
    }
  }

  if (direction === 'left' || direction === 'right') {
    const mousePositionInBoard = currentMouseBoard.indexOf('m')

    const mapDirections = {
      left: mousePositionInBoard - 1,
      right: mousePositionInBoard + 1
    }

    return (currentMouseBoard[mapDirections[direction]] ?? '').includes('*')
  }

  if (game.length <= 1) return false

  const mousePositionInBoard = currentMouseBoard.indexOf('m')

  const mapDirections = {
    up: mousePositionInMatrix - 1,
    down: mousePositionInMatrix + 1
  } as any

  return game[mapDirections[direction]][mousePositionInBoard].includes('*')
}
