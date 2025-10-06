import vine from '@vinejs/vine'
import { RoomStatus } from '#models/room'

export const roomValidator = vine.compile(
  vine.object({
    roomId: vine.string().trim().minLength(5),
    name: vine.string().trim().minLength(5),
    renterName: vine.string().trim(),
    reading: vine.number().min(0),
    status: vine.enum(Object.values(RoomStatus)),
  })
)
