export function checkSledJump (heights: Array<number>) {
  const point = Math.max(...heights)

  const indexPoint = heights.indexOf(point)

  const rise = heights.slice(0, indexPoint + 1)
  const descent = heights.slice(indexPoint)

  if (descent.length === 1) return false

  for (let i = 0; i < rise.length; i++) {
    if (rise[i] >= rise[i + 1]) {
      return false
    }
  }

  for (let i = point; i < descent.length - 1; i++) {
    if (descent[i] <= descent[i + 1]) {
      return false
    }
  }

  return true
}
