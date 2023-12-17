export function transformTree (tree: Array<number | null>) {
  let root = null as any

  const insert = (value: number | null) => {
    const currentNode = {
      value,
      left: null,
      right: null
    }

    if (!root) {
      root = currentNode
      return
    }

    let current = root

    while (true) {
      if (value === current.value) break

      if ((value as any) < current.value) {
        if (!current.left) {
          current.left = currentNode as any
          break
        }

        current = current.left
      } else {
        if (!current.right) {
          current.right = currentNode as any
          break
        }

        current = current.right
      }
    }
  }

  insert(1)
  insert(2)

  console.log(root)

  return tree
}

transformTree([3, 1, 0, 8, 12, null, 1])
