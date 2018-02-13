require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection:process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
      acquireTimeout: 30*1000,
      bailAfter: 30*1000
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection:process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    }
  }

};
