export function countHours (year: number, holidays: Array<string>) {
  const WEEKEND_DAYS = [0, 6]

  let count = 0

  holidays.forEach(holiday => {
    const [day, month] = holiday.split('/')
    const date = new Date(`${year}/${day}/${month}`)
    const currentDay = date.getDay()

    if (!WEEKEND_DAYS.includes(currentDay)) {
      count += 2
    }
  })

  return count
}

/*
function countHours(year, holidays) {
    return 2 * holidays.filter(
        (date) => ![0, 6].includes(new Date(`${year}-${date}`).getDay())
    ).length;
}
*/
