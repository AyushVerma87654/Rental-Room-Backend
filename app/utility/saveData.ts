import Billing from '#models/billing'
import Room from '#models/room'
import { initialBillingDetails, initialRooms } from './data.js'

export const saveData = async () => {
  const rooms = await Room.updateOrCreateMany('roomId', initialRooms)
  const billing = await Billing.updateOrCreate(
    { key: initialBillingDetails.key },
    initialBillingDetails
  )
  return { rooms, price: billing.value }
}
