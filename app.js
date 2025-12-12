require('dotenv').config();
const express = require("express");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const app = express();

// Middleware to parse form data (important!)
app.use(express.urlencoded({ extended: true }));

// Use the user routes
const userRoutes = require("./routes/userRoutes.js");
app.use("/", userRoutes);

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
