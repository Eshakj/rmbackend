const knex=require('../config/db')
const { Model } = require('objection')

Model.knex(knex)

class Customer extends Model {
  static get tableName() {
    return 'distributorinvoicetxns';
  }
}

module.exports = Customer;