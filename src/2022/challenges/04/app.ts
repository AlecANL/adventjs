interface Box {
  l: number
  w: number
  h: number
}

export function fitsInOneBox (boxes: Array<Box>) {
  if (boxes.length === 0) return false

  const sortedBoxes = [...boxes].sort((a, b) => {
    return (a.h + a.l + a.w) - (b.h + b.l + b.w)
  })

  return sortedBoxes.every((_, idx, boxes) => {
    const smallerBox = boxes[idx]
    const biggerBox = boxes[idx + 1]

    if (!biggerBox) return true

    return getIsBoxFitIntAnotherBox(smallerBox, biggerBox)
  })
}

const getIsBoxFitIntAnotherBox = (smallBox: Box, biggerBox: Box) => {
  const isValidLarge = smallBox.l < biggerBox.l
  const isValidWidth = smallBox.w < biggerBox.w
  const isValidHeight = smallBox.h < biggerBox.h

  return isValidHeight && isValidWidth && isValidLarge
}
