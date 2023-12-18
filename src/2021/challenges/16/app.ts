type SymbolsMapped = Record<string, number>

export function decodeNumber (symbols: string) {
  const decodeValues: SymbolsMapped = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  }

  const listOfSymbols = symbols.split('')
  let value = 0

  for (let i = 0; i < listOfSymbols.length; i++) {
    const current = listOfSymbols[i]
    const currentValue = decodeValues[current]

    if (!currentValue) return NaN

    value += currentValue
    const previous = listOfSymbols[i - 1]
    const previousValue = decodeValues[previous]

    if (i > 0 && previousValue < currentValue) {
      value -= 2 * previousValue
    }
  }

  return value
}
