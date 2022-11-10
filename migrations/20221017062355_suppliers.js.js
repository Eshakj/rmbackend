exports.up = async function (knex) {
    if (!(await knex.schema.hasTable('suppliers'))) {
      return await knex.schema.createTable('suppliers', function (table) {
        table.string('id').primary()
        table.string('supplier_code')
        table.string('supplier_name')
        table.string('supplier_pin')
        table.string('supplier_address')
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
    return await knex.schema.dropTable('suppliers')
  }
  