export function getCoins (change: number) {
  const coinExchange = [1, 2, 5, 10, 20, 50]

  const fix = Math.floor(change / coinExchange[5])
  const restFix = Math.floor(change % coinExchange[5])

  const five = Math.floor(restFix / coinExchange[4])
  const restFive = Math.floor(restFix % coinExchange[4])

  const four = Math.floor(restFive / coinExchange[3])
  const restFour = Math.floor(change % coinExchange[3])

  const three = Math.floor(restFour / coinExchange[2])
  const restThree = Math.floor(change % coinExchange[2])

  const two = Math.floor(restThree / coinExchange[1])
  const restTwo = Math.floor(restThree <= 0 ? 0 : restThree % coinExchange[1])

  const one = Math.floor(restTwo / coinExchange[0])

  const result = [one, two, three, four, five, fix]

  return result
}
