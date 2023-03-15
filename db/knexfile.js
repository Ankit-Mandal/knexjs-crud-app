// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mssql",
    connection: {
      server: "localhost",
      port: 1433,
      database: "todo",
      user: "USERNAME",
      password: "PASSWORD",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
