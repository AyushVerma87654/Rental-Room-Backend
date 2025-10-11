import Room, { BillingHistory, BillingHistoryEntry } from '#models/room'
import { billingValidator, roomValidator } from '#validators/room'
import type { HttpContext } from '@adonisjs/core/http'
import BillingsController from './billings_controller.js'
import { saveData } from '../utility/saveData.js'
import { DateTime } from 'luxon'

export default class RoomsController {
  public async fetchRooms(ctx: HttpContext) {
    try {
      const rooms = await Room.query().orderBy('id', 'asc')
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

  public async updateData({ response }: HttpContext) {
    try {
      const data = await saveData()
      return response.json(data)
    } catch (error) {
      return response.json({ responseDetails: { error } })
    }
  }

  public async updateBilling({ request, response }: HttpContext) {
    try {
      const validatedData = await request.validateUsing(billingValidator)
      const room = await Room.findByOrFail({ roomId: validatedData.roomId })

      const newEntry: BillingHistoryEntry = {
        rent: validatedData.rent,
        renterName: validatedData.renterName,
        billingAmount: validatedData.billingAmount,
        readingFrom: validatedData.readingFrom,
        readingAt: validatedData.readingAt,
        billedAt: DateTime.now(),
      }
      const currentHistory = room.billingHistory
      const updatedHistory: BillingHistory = {
        first: newEntry,
        second: currentHistory.first,
        third: currentHistory.second,
      }
      room.billingHistory = updatedHistory
      room.reading = validatedData.readingAt
      await room.save()

      return response.ok({ message: 'Billing history updated' })
    } catch (error) {
      console.error(error)
      return response.internalServerError({ message: 'Failed to update billing history' })
    }
  }
}
