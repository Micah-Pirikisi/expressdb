const pool = require("./index");

// Get all messages
async function getAllMessages() {
  const result = await pool.query(
    "SELECT * FROM messages ORDER BY created_at DESC"
  );
  return result.rows;
}

// Insert a new message
async function insertMessage(username, content) {
  if (!username || !content) throw new Error("Missing username or content");

  const result = await pool.query(
    "INSERT INTO messages (username, content) VALUES ($1, $2) RETURNING *",
    [username, content]
  );
  return result.rows[0];
}

// Delete all messages
async function deleteAllMessages() {
  await pool.query("DELETE FROM messages");
}

module.exports = {
  getAllMessages,
  insertMessage,
  deleteAllMessages,
};
