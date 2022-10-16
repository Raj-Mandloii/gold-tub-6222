const express = require("express");
const app = express();
const { connection } = require("./Config/db");
require("dotenv").config();
const { userController } = require("./Router/user.routes");


const PORT = process.env.PORT || 8700
const cors = require("cors");
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use("/user", userController);



app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
  console.log("App runinng on", PORT);
});
