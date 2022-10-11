// exports.up = async function (knex) {
//     if (!(await knex.schema.hasTable('product'))) {
//       return await knex.schema.createTable('product', function (table) {
//         table.string('product_code').primary()
//         table.string('product_name')
//         table.decimal('product_cost_price')
//         table.decimal('product_sell_price')
//         table.decimal('product_vat')
//         table.decimal('product_deposit')
//         table.decimal('product_installment_amount')
//         table.text('product_installment_count')
//         table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
//         table.timestamp('updated_at', { precision: 6 }).defaultTo(knex.fn.now(6))
//       })
//     }
//   }
  
//   /**
//    * @param { import("knex").Knex } knex
//    * @returns { Promise<void> }
//    */
//   exports.down = async function (knex, Promise) {
//     return await knex.schema.dropTable('product')
//   }



exports.up = function(knex) {
    return knex.schema
      .createTable('products', function (table) {
        table.string('product_code').primary()
                table.string('product_name')
                table.decimal('product_cost_price')
                table.decimal('product_sell_price')
                table.decimal('product_vat')
                table.decimal('product_deposit')
                table.decimal('product_installment_amount')
                table.text('product_installment_count')
                table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
                table.timestamp('updated_at', { precision: 6 }).defaultTo(knex.fn.now(6))
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTable("products")
  };