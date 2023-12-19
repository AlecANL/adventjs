export function canCarry (capacity: number, trip: Array<Array<number>>) {
  const mapped: Record<number, number> = {}
  let value = 0

  for (let i = 0; i < trip.length; i++) {
    const [quantity, from, to] = trip[i]

    if (mapped[from]) {
      value -= mapped[from]
    }

    value += quantity

    if (value > capacity) return false
    mapped[to] = quantity
  }

  return true
}
