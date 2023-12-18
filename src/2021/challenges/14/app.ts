export function missingReindeer (ids: Array<number>) {
  const max = Math.max(...ids) + 2

  for (let i = 0; i < max; i++) {
    if (!ids.includes(i)) {
      return i
    }
  }

  return 1
}

// export const missingReindeer = (ids: Array<number>) => {
//   return ids.length * (ids.length + 1) / 2 - ids.reduce((a, b) => a + b, 0)
// }
