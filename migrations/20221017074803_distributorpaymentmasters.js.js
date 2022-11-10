exports.up = async function (knex) {
    if (!(await knex.schema.hasTable('distributorpaymentmasters'))) {
      return await knex.schema.createTable('distributorpaymentmasters', function (table) {
        table.string('id').primary()
        table.date('payment_date')
        table.string('payment_mode')
        table.string('payment_code')
        table.string('amount')
        table.string('invoice')
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
    return await knex.schema.dropTable('distributorpaymentmasters')
  }
