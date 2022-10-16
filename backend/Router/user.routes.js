const { Router } = require("express");
const userController = Router();
let jwt = require("jsonwebtoken");
const { UserModel } = require("../Models/User.models");
const bcrypt = require("bcrypt");

function validateEmailAccessibility(email) {
  return UserModel.findOne({ email: email }).then(function (result) {
    return result !== null;
  });
}

userController.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  validateEmailAccessibility(email).then((valid) => {
    if (!valid) {
      bcrypt
        .hash(password, 5)
        .then(async function (hash) {
          const user = new UserModel({
            firstname,
            lastname,
            email,
            password: hash,
          });
          await user.save();
          res.json({ msg: "Sign up Successfully" });
        })
        .catch(() => {
          console.log("Error!!");
          res.send("error");
        });
    } else {
      res.json({ msg: "Email already exists" });
    }
  });
});

userController.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let userFind = await UserModel.findOne({ email });
  let uid = userFind._id;
  let hash = userFind.password;
  bcrypt.compare(password, hash, function (err, result) {
    if (result) {
      let token = jwt.sign({ id: uid }, process.env.SECRET_KEY);
      res.json({msg:"Login successful", token: token });
    } else {
      res.json("Login Failed");
    }
  });
});

module.exports = {
  userController,
};
