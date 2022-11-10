exports.up = async function (knex) {
    if (!(await knex.schema.hasTable('distributorinvoicemasters'))) {
      return await knex.schema.createTable('distributorinvoicemasters', function (table) {
        table.string('id').primary()
        table.string('distributor_code')
        table.string('diocese_code')
        table.integer('invoice_number')
        table.date('date')
        table.string('ship_to')
        table.string('terms')
        table.date('ship_date')
        table.decimal('ship_total')
        table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
        table.timestamp('updated_at', { precision: 6 }).defaultTo(knex.fn.now(6))
      })
    }
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function (knex, Promise) {
    return await knex.schema.dropTable('distributorinvoicemasters')
  }
  