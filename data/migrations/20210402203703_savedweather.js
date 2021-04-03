exports.up = function (knex) {
  return knex.schema.createTable("weather", (table) => {
    table.increments().primary();
    table.string("city").notNullable();
    table.decimal("temp").notNullable();
    table.decimal("humidity").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("weather");
};
