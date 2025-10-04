import type { HttpContext } from '@adonisjs/core/http'

export default class LoggingMiddleware {
  public async handle({ request }: HttpContext, next: () => Promise<void>) {
    console.log(`Incoming ${request.method()} request to ${request.url()}`)
    await next()
  }
}
