const db = require("../db/queries");

// GET / → list all usernames
async function getUsernames(req, res) {
  try {
    const search = req.query.search || "";
    let usernames;

    if (search) {
      usernames = await db.searchUsernames(search);
    } else {
      usernames = await db.getAllUsernames();
    }

    console.log("Usernames: ", usernames);

    res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching usernames");
  }
}

// GET /new → render the form
async function createUsernameGet(req, res) {
  res.sendFile("new.html", { root: "./views" });
}

// POST /new → insert new username
async function createUsernamePost(req, res) {
  try {
    if (!username || username.trim() === "") {
      return res.status(400).send("Username cannot be empty");
    }

    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/"); // go back to the homepage
  } catch (err) {
    console.error(err);
    res.status(500).send("Error inserting username");
  }
}

async function deleteAllUsernames(req, res) {
  try {
    await db.deleteAllUsernames();
    res.send("all usernames deleted");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting usernames");
  }
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteAllUsernames,
};
