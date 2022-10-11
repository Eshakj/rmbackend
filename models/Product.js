const knex=require('../config/db')
const { Model } = require('objection')

Model.knex(knex)

class Product extends Model {
  static get tableName() {
    return 'products';
  }
}

module.exports = Product;