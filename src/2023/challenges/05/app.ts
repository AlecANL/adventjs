export function cyberReindeer (road: string, time: number) {
  const BARRIER = '|'
  const SECONDS_WAIT = 5
  const POSITION_BARRIER = road.indexOf(BARRIER)
  road = road.replace('S', '.')
  const currentRoad = []

  for (let i = 0; i < time; i++) {
    const path = [...road]
    const firstMax = (i - SECONDS_WAIT + 1)
    const subN = (((0 - firstMax) ** 2) ** 0.5)
    const max = (0 + firstMax + subN) / 2

    const firstMin = (POSITION_BARRIER - 1 + max)
    const subM = (((i - firstMin) ** 2) ** 0.5)
    const min = ((i + firstMin) - subM) / 2
    const sp = min
    path[sp] = 'S'
    const newRoad = path.join('')
    const finalRoad = newRoad.replace(/\|/g, '*')
    const roadTraveled = i < SECONDS_WAIT ? newRoad : finalRoad
    currentRoad.push(roadTraveled)
  }

  return currentRoad
}
