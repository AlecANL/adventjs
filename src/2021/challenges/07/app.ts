export function contains (store: any, product: string): boolean {
  const valuesInStore: Array<string> = []

  const flattenObjectValues = (store: any): void => {
    if (typeof store === 'object') {
      for (const item of Object.values(store)) {
        flattenObjectValues(item)
      }
    } else {
      valuesInStore.push(store)
    }
  }

  flattenObjectValues(store)

  return valuesInStore.includes(product)
}
