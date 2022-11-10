exports.up = async function (knex) {
    if (!(await knex.schema.hasTable('products'))) {
      return await knex.schema.createTable('products', function (table) {
        table.string('id').primary()
        table.string('product_code')
        table.string('product_name')
        table.string('product_cost_price')
        table.string('product_sell_price')
        table.string('product_vat')
        table.string('product_deposit')
        table.string('product_installment_amount')
        table.string('product_installment_count')
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
    return await knex.schema.dropTable('products')
  }
  