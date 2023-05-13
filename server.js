const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const port = process.env.PORT || 5001;
const app = express();
//const data = require("./data");
const axios = require("axios");
const dataURL = "http://localhost:3001/users";
const token =
  process.env.TOKEN ||
  "ahuBHejkJJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA07i73Gebhu98";

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, ".", "build")));
app.use(express.static("public"));


function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ message: "Must be logged in." });
  }
}

app.get("/api", (req, res) => {
     res.send({ message: "api is up" });
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || username === "" || !password || password === "") {
    req.loggedIn = false;
    res.status(403).json({ message: "Missing username and/or password." });
  }

  const found = await axios
    .get(`${dataURL}?username=${username}`)
    .then((res) => res.data.find((user) => user.username === username));

  if (found && found.username === username && found.password === password) {
    req.loggedIn = true;
    res.status(200).json({
      id: found.id,
      name: found.firstName,
      username: found.username,
      role: "user",
      token: token,
    });
  } else {
    res.status(403).json({ message: "Username and/or Password incorrect." });
  }
});

app.post("/api/register", async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;

  if (
    !firstName ||
    firstName.trim() === "" ||
    !lastName ||
    lastName.trim() === "" ||
    !email ||
    email.trim() === "" ||
    !username ||
    username.trim() === "" ||
    !password ||
    password.trim() === ""
  ) {
    req.loggedIn = false;
    return res
      .status(403)
      .json({ message: "Missing details. All fields are required!" });
  }

  const found = await axios.get(`${dataURL}`).then((res) => {
    return res.data.find((user) => user.username === username);
  });

  if (found) {
    req.loggedIn = false;
    return res.status(400).json({ message: "Username already exists." });
  }

  const newUser = {
    firstName,
    lastName,
    email,
    username,
    password,
    bookmarks: [],
  };

  const postedUser = await axios.post(dataURL, newUser).then((res) => res.data);

  req.loggedIn = true;
  return res.status(201).json({
    id: postedUser.id,
    name: postedUser.firstName,
    username: postedUser.username,
    role: "user",
    token: token,
  });
});

app.get("/api/saved-activities/:id", authenticator, async (req, res) => {
  const { id } = req.params;

  const savedActivities = await axios
    .get(`${dataURL}/${id}`)
    .then((res) => res.data.bookmarks);

  return res.status(200).json(savedActivities);
});

app.patch("/api/saved-activities/:id", authenticator, async (req, res) => {
  const { id } = req.params;
  const bookmarks = req.body;

  const result = await axios
    .patch(`${dataURL}/${id}`, { bookmarks })
    .then((res) => res.data);

  res.status(200).json(result);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
