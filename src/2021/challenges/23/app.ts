export function canReconfigure (from: string, to: string) {
  if (from.length !== to.length) return false

  const hashMap: Record<string, string> = {}

  const fromArray = from.split('')

  for (let i = 0; i < fromArray.length; i++) {
    const char = fromArray[i]
    if (!hashMap[char] && !hashMap[to[i]]) {
      hashMap[char] = to[i]
      hashMap[to[i]] = char
    }

    if (hashMap[char] !== to[i]) return false
  }
  return true
}
