const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// GET /
router.get("/", userController.getUsernames);

// GET /new
router.get("/new", userController.createUsernameGet);

// POST /new
router.post("/new", userController.createUsernamePost);

module.exports = router;
