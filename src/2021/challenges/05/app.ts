export function daysToXmas (date: Date) {
  const metaDate = new Date('Dec 25, 2021')
  const year2021 = metaDate.getFullYear()
  const christmasDay2021 = metaDate.getDate()

  const inputYear = date.getFullYear()
  const inputDay = date.getDate()
  const DAYS_IN_DECEMBER = 31
  const VALUE_RETURN_TO_CHRISTMAS_DAY = 0

  if (inputYear === year2021 && christmasDay2021 !== inputDay) {
    return (inputDay - christmasDay2021) * -1
  }

  if (inputYear > year2021) {
    const value = DAYS_IN_DECEMBER - christmasDay2021
    return (value + inputDay) * -1
  }

  return VALUE_RETURN_TO_CHRISTMAS_DAY
}
