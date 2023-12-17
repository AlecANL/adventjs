export function getCoins (change: number) {
  const coinExchange = [1, 2, 5, 10, 20, 50]
  const coins = []

  let accumulator = change

  for (let i = coinExchange.length - 1; i >= 0; i--) {
    const total = Math.floor(accumulator / coinExchange[i])
    const rest = Math.floor(accumulator % coinExchange[i])
    accumulator = rest

    coins.push(total)
  }

  return [...coins].reverse()
}
