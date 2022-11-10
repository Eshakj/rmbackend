const knex=require('../config/db')
const { Model } = require('objection')

Model.knex(knex)

class Vat extends Model {
  static get tableName() {
    return 'vats';
  }
}

module.exports = Vat;