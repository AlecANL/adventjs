type CarrierHelpers = Array<string>
type CarrierPackages = number
type CarrierItem = (string | CarrierPackages | CarrierHelpers)
type Carriers = CarrierItem[][]

const POSITION_IN_CARRIER = {
  ID: 0,
  PACKAGES: 1,
  HELPERS: 2
} as const

export function countPackages (carriers: Carriers, carrierID: string) {
  const mainCarrier = findCarrier(carriers, carrierID)

  if (!mainCarrier) return 0

  const mainHelpers = mainCarrier[POSITION_IN_CARRIER.HELPERS] as CarrierHelpers
  const mainPackages = mainCarrier[POSITION_IN_CARRIER.PACKAGES] as CarrierPackages

  let totalPackages = mainPackages

  const searchInDeepCarriers = (helpers: CarrierHelpers) => {
    for (let i = 0; i < helpers.length; i++) {
      const carrier = findCarrier(carriers, helpers[i])

      if (!carrier) return 0

      totalPackages += carrier[POSITION_IN_CARRIER.PACKAGES] as CarrierPackages

      if (carrier[POSITION_IN_CARRIER.ID] === helpers[i]) {
        searchInDeepCarriers(carrier[POSITION_IN_CARRIER.HELPERS] as CarrierHelpers)
      }
    }
  }

  searchInDeepCarriers(mainHelpers)

  return totalPackages
}

const findCarrier = (carriers: Carriers, carrierID: string) => {
  return (carriers.find(carrier => carrier[POSITION_IN_CARRIER.ID] === carrierID))
}
