const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const user = require("./Models/Users");
const UserModel = require("./Models/Users");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Manikandan:Manikan200425@crud.sz6u7.mongodb.net/?retryWrites=true&w=majority&appName=crud"
);

app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .then((err) => console.log(err));
});
app.post("/createUser", (req, res) => {
  UserModel.create(req.body);
});
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .then((err) => console.log(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, email: req.body.email, roles: req.body.roles }
  )
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
