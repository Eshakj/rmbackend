exports.up = async function (knex) {
    if (!(await knex.schema.hasTable('distributorinvoicetxns'))) {
      return await knex.schema.createTable('distributorinvoicetxns', function (table) {
        table.string('id').primary()
        table.string('invoice_number')
        table.string('invoice_sub_number')
        table.string('customer_id')
        table.string('product_code')
        table.string('rate')
        table.string('amount')
        table.string('vat')
        table.string('total')
        table.string('product_serial')
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
    return await knex.schema.dropTable('distributorinvoicetxns')
  }
  