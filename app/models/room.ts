import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export enum RoomStatus {
  occupied = 'OCCUPIED',
  vacant = 'VACANT',
}

export type BillingHistoryEntry = {
  rent: number
  renterName: string
  billingAmount: number
  readingFrom: number
  readingAt: number
  billedAt: DateTime
}

export type BillingHistory = {
  first: BillingHistoryEntry
  second: BillingHistoryEntry
  third: BillingHistoryEntry
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
  declare rent: number

  @column()
  declare billingHistory: BillingHistory

  @column()
  declare status: RoomStatus

  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare lastUpdatedAt: DateTime
}
