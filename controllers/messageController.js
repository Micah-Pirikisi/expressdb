const db = require("../db/messages");

// GET /messages → list all messages
async function getMessages(req, res) {
  try {
    const messages = await db.getAllMessages();
    res.send(
      messages
        .map((m) => `${m.username}: ${m.content} (${m.created_at})`)
        .join("<br>")
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching messages");
  }
}

// POST /messages → insert new message
async function createMessage(req, res) {
  try {
    const { username, content } = req.body;
    if (!username || !content) {
      return res.status(400).send("Username and message content are required");
    }

    await db.insertMessage(username, content);
    res.redirect("/messages");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating message");
  }
}

// GET /messages/delete → delete all messages
async function deleteMessages(req, res) {
  try {
    await db.deleteAllMessages();
    res.send("All messages deleted!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting messages");
  }
}

module.exports = {
  getMessages,
  createMessage,
  deleteMessages,
};
