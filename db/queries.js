const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function searchUsernames(term) {
  const res = await pool.query("SELECT * FROM users WHERE username ILIKE $1", [
    `%${term}%`,
  ]);
  return res.rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteAllUsernames() {
  await pool.query("DELETE FROM users");
}

module.exports = {
  getAllUsernames,
  searchUsernames,
  insertUsername,
  deleteAllUsernames,
};
