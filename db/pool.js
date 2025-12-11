const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "devmicah",
  database: "top_users",
  password: "micahtadiwapirikisi",
  port: 5432, // The default port
});
