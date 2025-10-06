import Room from '#models/room'
import { roomValidator } from '#validators/room'
import type { HttpContext } from '@adonisjs/core/http'
import BillingsController from './billings_controller.js'
import { saveData } from '../utility/saveData.js'

export default class RoomsController {
  public async fetchRooms(ctx: HttpContext) {
    try {
      const rooms = await Room.query().orderBy('id', 'asc')
      console.log('rooms', rooms)
      await new BillingsController().fetchPrice(ctx)
      const price = ctx.response.getBody().price
      return ctx.response.json({ rooms, price })
    } catch (error) {
      return ctx.response.json({ responseDetails: { error } })
    }
  }

  public async updateRoom({ request, response }: HttpContext) {
    try {
      const validatedData = await request.validateUsing(roomValidator)
      const room = await Room.updateOrCreate({ roomId: validatedData.roomId }, validatedData)
      return response.json(room)
    } catch (error) {
      return response.json({ responseDetails: { error } })
    }
  }

  public async updateData({  response }: HttpContext) {
    try {
      const data = await saveData()
      console.log("data", data);
      return response.json(data)
    } catch (error) {
      return response.json({ responseDetails: { error } })
    }
  }
}
