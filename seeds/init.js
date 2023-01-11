/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
   // Deletes ALL existing entries
   await knex("user").insert([
      { name: "user1", password: "user1", email: "user1@email.com" },
      { name: "user2", password: "user2", email: "user2@email.com" },
      { name: "user3", password: "user3", email: "user3@email.com" },
   ]);
};
