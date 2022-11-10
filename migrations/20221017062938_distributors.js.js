exports.up = async function (knex) {
    if (!(await knex.schema.hasTable('distributors'))) {
      return await knex.schema.createTable('distributors', function (table) {
        table.string('id').primary()
        table.string('distributor_code')
        table.string('distributor_name')
        table.string('distributor_contact')
        table.string('distributor_phone')
        table.varchar('distributor_email')
        table.decimal('distributor_vat')
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
    return await knex.schema.dropTable('distributors')
  }
  