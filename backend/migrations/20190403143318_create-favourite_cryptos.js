exports.up = function(knex, Promise) {
  return knex.schema.createTable("favourite_cryptos", function(table) {
    table.increments().primary();

    table.integer("user_id").index();
    table.integer("crypto_id").index();

    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("favourite_cryptos");
};
