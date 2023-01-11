// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
   development: {
      client: "pg",
      connection: {
         database: process.env.database,
         user: process.env.user,
         password: process.env.password,
         port: process.env.port,
         host: process.env.host,
      },
   },
};
