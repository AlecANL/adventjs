export function sumPairs (numbers: Array<number>, result: number) {
  for (let i = 0; i < numbers.length; i++) {
    const copy = [...numbers]
    copy.splice(i, 1)

    for (const element of copy) {
      if ((numbers[i] + element) === result) {
        return [numbers[i], element]
      }
    }
  }
  return null
}
