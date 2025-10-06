import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Billing extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  declare id: number

  @column({ isPrimary: true })
  declare key: string

  @column()
  declare value: number

  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  declare updatedAt: DateTime
}
