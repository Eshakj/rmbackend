exports.up = async function (knex) {
    if (!(await knex.schema.hasTable('customers'))) {
      return await knex.schema.createTable('customers', function (table) {
        table.string('id').primary()
        table.string('customer_name')
        table.string('church')
        table.string('diocese')
        table.text('phone_number')
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
    return await knex.schema.dropTable('customers')
  }
