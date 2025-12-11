const express = require("express");
const path = require("path");

const app = express();

// Middleware to parse form data (important!)
app.use(express.urlencoded({ extended: true }));

// Use the user routes
const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes);

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
