export function countDecorations (bigTree: any) {
  let value = 0

  const countValueInThree = (node: any) => {
    if (node !== null) {
      countValueInThree(node.left)
      value += node.value
      countValueInThree(node.right)
    }
  }

  countValueInThree(bigTree)

  return value
}
