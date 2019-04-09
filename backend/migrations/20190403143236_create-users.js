exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments().primary();
    table.string("username");
    table.string("password");
    table.string("name");
    table.string("email");
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
