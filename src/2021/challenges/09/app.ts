type GroupedIt = ((item: any) => string | number) | string

export function groupBy (collection: Array<any>, it: GroupedIt) {
  if (typeof it === 'function') {
    return groupByFn(collection, it)
  }

  return groupByProperty(collection, it)
}

function groupByFn (collection: Array<any>, it: ((item: any) => string | number)) {
  return collection.reduce<any>((group, currentCollection) => {
    const key = it(currentCollection)

    if (!group[key]) {
      group[key] = []
    }

    group[key].push(currentCollection)

    return group
  }, {})
}

function groupByProperty (collection: Array<any>, it: string) {
  return collection.reduce<any>((group, currentCollection) => {
    const key = currentCollection[it]

    if (!group[key]) {
      group[key] = []
    }

    group[currentCollection[it]].push(currentCollection)

    return group
  }, {})
}
