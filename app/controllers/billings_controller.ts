import Billing from '#models/billing'
import type { HttpContext } from '@adonisjs/core/http'

export default class BillingsController {
  public async fetchPrice({ response }: HttpContext) {
    try {
      const price = await Billing.findByOrFail('key', 'Price Per Unit')
      return response.json({ price: price.value })
    } catch (error) {
      return response.json({ responseDetails: { error } })
    }
  }

  public async updatePrice({ request, response }: HttpContext) {
    try {
      const key = request.body().key
      const value = request.body().value
      const updatedData = await Billing.updateOrCreate({ key }, { value })
      return response.json({ price: updatedData.value })
    } catch (error) {
      return response.json({ responseDetails: { error } })
    }
  }
}
