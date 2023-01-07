/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('addons', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();

    table.string('description');
    table.integer('price').notNullable();
    table.string('category');
    table.integer('brand_id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  //  Drop the users table
  return knex.schema.dropTableIfExists('addons');
};
