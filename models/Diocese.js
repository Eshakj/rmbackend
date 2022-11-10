const knex=require('../config/db')
const { Model } = require('objection')

Model.knex(knex)

class Diocese extends Model {
  static get tableName() {
    return 'dioceses';
  }
}

module.exports = Diocese;