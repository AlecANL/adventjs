export function maxProfit (prices: Array<number>) {
  let profit = -1
  for (let i = 0; i < prices.length; i++) {
    const temp = [...prices].slice(i, prices.length)

    for (let j = 1; j < temp.length; j++) {
      const buy = prices[i]
      const sell = temp[j]

      if (buy < sell) {
        const totalProfit = sell - buy

        if (totalProfit > profit) {
          profit = totalProfit
        }
      }
    }
  }

  return profit
}
