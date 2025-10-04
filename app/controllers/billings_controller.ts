import Billing from '#models/billing'
import type { HttpContext } from '@adonisjs/core/http'

export default class BillingsController {
  public async updatePrice({ request, response }: HttpContext) {
    try {
      const key = request.body().key
      const value = request.body().value
      const updatedData = await Billing.updateOrCreate({ key }, { value })
      return response.json({ updatedData })
    } catch (error) {
      return response.json({ responseDetails: { error } })
    }
  }
}
