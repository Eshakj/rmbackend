exports.up = async function (knex) {
    if (!(await knex.schema.hasTable('distributorpaymentallocations'))) {
      return await knex.schema.createTable('distributorpaymentallocations', function (table) {
        table.string('id').primary()
        table.string('payment_id')
        table.string('invoice_sub_number')
        table.string('amount_allocated')
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
    return await knex.schema.dropTable('distributorpaymentallocations')
  }
