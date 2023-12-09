export function adjustLights (lights: Array<string>) {
  let mainCount = 0
  let helperCount = 0

  for (let i = 0; i < lights.length; i++) {
    const currentColor = i % 2 === 0 ? '🟢' : '🔴'

    if (lights[i] !== currentColor) {
      mainCount++
      continue
    }

    helperCount++
  }

  return Math.min(mainCount, helperCount)
}
