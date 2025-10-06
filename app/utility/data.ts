import { RoomStatus } from '#models/room'

export const initialRooms = [
  {
    // id:1,
    roomId: 'room1',
    name: 'Room 1',
    renterName: 'Aakash',
    reading: 10,
    lastUpdatedAt: undefined,
    status: RoomStatus.occupied,
  },
  {
    // id:2,
    roomId: 'room2',
    name: 'Room 2',
    renterName: '',
    reading: 20,
    lastUpdatedAt: undefined,
    status: RoomStatus.vacant,
  },
  {
    // id:3,
    roomId: 'room3',
    name: 'Room 3',
    renterName: 'Roshan',
    reading: 30,
    lastUpdatedAt: undefined,
    status: RoomStatus.occupied,
  },
  {
    // id:4,
    roomId: 'room4',
    name: 'Room 4',
    renterName: 'Saksham',
    reading: 40,
    lastUpdatedAt: undefined,
    status: RoomStatus.occupied,
  },
  {
    // id:5,
    roomId: 'kitchen',
    name: 'Kitchen',
    renterName: 'Roshan',
    reading: 50,
    lastUpdatedAt: undefined,
    status: RoomStatus.occupied,
  },
]

export const initialBillingDetails = { key: 'Price Per Unit', value: 6}
