/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
   await knex.schema.createTable("user", function (table) {
      table.increments();
      table.string("name");
      table.string("password");
      table.string("email");
      table.timestamps(true, true);
   });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
   await knex.schema.dropTable("user");
};
