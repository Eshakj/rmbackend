exports.up = function(knex) {
    return knex.schema
      .createTable('diocese', function (table) {
          table.increments('id');
          table.string('diocese_name', 255).notNullable();
          table.string('church_name', 255).notNullable();
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTable("diocese")
  };