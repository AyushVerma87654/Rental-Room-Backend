import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'rooms'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('room_id').unique()
      table.string('name').unique()
      table.string('renter_name')
      table.string('reading')
      table.enum('status', ['OCCUPIED', 'VACANT'])
      table.timestamp('created_at')
      table.timestamp('last_updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
