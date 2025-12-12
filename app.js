const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to parse form data (important!)
app.use(express.urlencoded({ extended: true }));

// Use the user routes
const userRoutes = require("./routes/userRoutes.js");
app.use("/", userRoutes);

// Use the message routes 
const messageRoutes = require("./routes/messages");
app.use("/messages", messageRoutes);

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
