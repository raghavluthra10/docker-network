const Knex = require("knex");
const { development } = require("./knexfile");
const database = Knex(development);
module.exports = { database };
