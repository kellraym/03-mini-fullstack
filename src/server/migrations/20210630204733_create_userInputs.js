
exports.up = function(knex) {
  return knex.schema.createTable('user_inputs', table => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('category').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_inputs');
};
