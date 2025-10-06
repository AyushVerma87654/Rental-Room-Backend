import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export enum RoomStatus {
  occupied = 'OCCUPIED',
  vacant = 'VACANT',
}

export default class Room extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  declare id: number

  @column()
  declare roomId: string

  @column()
  declare name: string

  @column()
  declare renterName: string | null

  @column()
  declare reading: number

  @column()
  declare status: RoomStatus

  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare lastUpdatedAt: DateTime
}
