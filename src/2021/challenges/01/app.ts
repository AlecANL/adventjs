interface Sheep {
  name: string
  color: string
}

export function countSheep (sheepList: Array<Sheep>) {
  const COLOR_FOUND = 'rojo'
  const FIRST_CHAR_TO_FOUND = 'n'
  const SECOND_CHAR_TO_FOUND = 'a'

  return sheepList.filter(sheep => {
    return sheep.color === COLOR_FOUND &&
    sheep.name.toLowerCase().includes(FIRST_CHAR_TO_FOUND) &&
    sheep.name.toLowerCase().includes(SECOND_CHAR_TO_FOUND)
  })
}
