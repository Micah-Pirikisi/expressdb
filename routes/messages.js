const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

// List messages
router.get("/", messageController.getMessages);

// Create message form (optional)
router.get("/new", (req, res) => {
  res.sendFile("new_message.html", { root: "./views" });
});

// Submit message
router.post("/new", messageController.createMessage);

// Delete all messages
router.get("/delete", messageController.deleteMessages);

module.exports = router;
