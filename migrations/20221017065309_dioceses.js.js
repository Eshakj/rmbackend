exports.up = async function (knex) {
    if (!(await knex.schema.hasTable('dioceses'))) {
      return await knex.schema.createTable('dioceses', function (table) {
        table.string('id').primary()
        table.string('diocese_code')
        table.string('distributor_code')
        table.string('diocese_name')
        table.string('county')
        table.string('sub_county')
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
    return await knex.schema.dropTable('dioceses')
  }
