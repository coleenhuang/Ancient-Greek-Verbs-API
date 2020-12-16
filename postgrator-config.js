require('dotenv').config();

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

module.exports = {
  "migrationsDirectory": "migrations",
  "driver": "pg",
  "connectionString": connectionString,
}
