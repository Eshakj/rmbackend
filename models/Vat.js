const knex=require('../config/db')
const { Model } = require('objection')

Model.knex(knex)

class Vat extends Model {
  static get tableName() {
    return 'vat';
  }
}

module.exports = Vat;