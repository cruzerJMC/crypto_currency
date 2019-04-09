exports.up = function(knex, Promise) {
  return knex.schema.createTable("cryptos", function(table) {
    table.increments().primary();

    table.integer("user_id").index();
    table.string("name");
    table.text("ticker");

    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("cryptos");
};
