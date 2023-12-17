export function shouldBuyFidelity (times: number) {
  const NORMAL_PRICE = 12
  const FIDELITY_PRICE = 250
  const DISCOUNT_DISCOUNT = 0.75
  const arr = Array.from({ length: times }, (_, index) => index + 1)

  const normalAmount = NORMAL_PRICE * times

  const totalDiscount = arr.reduce((acum, current) => {
    return acum + (NORMAL_PRICE * Math.pow(DISCOUNT_DISCOUNT, current))
  }, 0)

  const fidelityAmount = totalDiscount + FIDELITY_PRICE

  return normalAmount > fidelityAmount
}
