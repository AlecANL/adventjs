export function checkIsSameTree (treeA: any, treeB: any) {
  const first = getValueFromTree(treeA)
  const second = getValueFromTree(treeB)

  return first === second
}

const getValueFromTree = (tree: any) => {
  let value = 0

  const searchValue = (node: any) => {
    if (node !== null) {
      searchValue(node.left)
      value += node.value
      searchValue(node.right)
    }
  }

  searchValue(tree)
  return value
}
