import Room from '#models/room'
import { roomValidator } from '#validators/room'
import type { HttpContext } from '@adonisjs/core/http'

export default class RoomsController {
  public async updateRoom({ request, response }: HttpContext) {
    try {
      const validatedData = await request.validateUsing(roomValidator)
      const room = await Room.updateOrCreate({ roomId: validatedData.roomId }, validatedData)
      return response.json({ room })
    } catch (error) {
      return response.json({ responseDetails: { error } })
    }
  }
}
