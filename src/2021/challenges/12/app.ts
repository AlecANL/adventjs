export function getMinJump (obstacles: Array<number>) {
  const obstaclesSorted = [...obstacles].sort((a, b) => a - b)
  let count = 1

  for (let i = 0; i <= obstaclesSorted[obstaclesSorted.length - 1]; i += count) {
    if (obstaclesSorted.includes(i)) {
      count++
      i = 0
    }
  }

  return count
}
