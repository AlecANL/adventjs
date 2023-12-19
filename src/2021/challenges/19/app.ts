export default function learn (time: number, courses: Array<number>) {
  let max = 0
  let result: Array<number> = []

  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const a = courses[i]
      const b = courses[j]
      const total = a + b

      if (total <= time && total > max) {
        max = total
        result = [i, j]
      }
    }
  }

  return result.length > 0 ? result : null
}
