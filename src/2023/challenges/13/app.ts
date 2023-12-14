const MILLISECONDS_IN_HOUR = 3600000
const MILLISECONDS_IN_MINUTE = 60000
const MILLISECONDS_IN_SECONDS = 1000

const MAX_DELIVERY_HOUR = 7
const MAX_DELIVERY_HOUR_MINUTES = 0

export function calculateTime (deliveries: Array<string>) {
  const META = MILLISECONDS_IN_HOUR * MAX_DELIVERY_HOUR +
  MILLISECONDS_IN_MINUTE * MAX_DELIVERY_HOUR_MINUTES +
  MILLISECONDS_IN_SECONDS * MAX_DELIVERY_HOUR_MINUTES

  let totalHours = 0
  let totalMinutes = 0
  let totalSeconds = 0

  for (const delivery of deliveries) {
    const deliveryTime = delivery.split(':')
    const deliveryHour = +(deliveryTime[0])
    const deliveryMinutes = +(deliveryTime[1])
    const deliverySeconds = +(deliveryTime[2])

    totalHours += deliveryHour
    totalMinutes += deliveryMinutes
    totalSeconds += deliverySeconds
  }

  const DELIVERY_TIME = MILLISECONDS_IN_HOUR * totalHours +
  MILLISECONDS_IN_MINUTE * totalMinutes +
  MILLISECONDS_IN_SECONDS * totalSeconds

  const total = META - DELIVERY_TIME

  const t = Math.trunc(Math.abs(total / MILLISECONDS_IN_HOUR))
  const m = Math.trunc(Math.abs((total % MILLISECONDS_IN_HOUR) / MILLISECONDS_IN_MINUTE))
  const s = Math.trunc(Math.abs((total % MILLISECONDS_IN_HOUR) % MILLISECONDS_IN_MINUTE / MILLISECONDS_IN_SECONDS))

  const prefix = DELIVERY_TIME < META ? '-' : ''

  const firstPart = prefix + String(t).padStart(2, '0') + ':'
  const secondPart = String(m).padStart(2, '0') + ':'
  const thirdPart = String(s).padStart(2, '0')

  return firstPart + secondPart + thirdPart
}
