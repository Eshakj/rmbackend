exports.up = async function (knex) {
    if (!(await knex.schema.hasTable('vats'))) {
      return await knex.schema.createTable('vats', function (table) {
        table.string('id').primary()
        table.string('vat_code')
        table.string('vat_percent')
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
    return await knex.schema.dropTable('vats')
  }
