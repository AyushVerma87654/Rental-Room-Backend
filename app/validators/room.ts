import vine from '@vinejs/vine'
import { RoomStatus } from '#models/room'

export const roomValidator = vine.compile(
  vine.object({
    roomId: vine.string().trim().minLength(1),
    name: vine.string().trim().minLength(1),
    renterName: vine.string().trim(),
    reading: vine.number().min(0),
    lastUpdated: vine.date().nullable(),
    status: vine.enum(Object.values(RoomStatus)),
  })
)
