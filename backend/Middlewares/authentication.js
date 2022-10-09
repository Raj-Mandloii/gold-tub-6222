const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send("Please Login again");
  }
  // console.log(req.headers.authorization.split(" ")[1]);
  const token = req.headers.authorization.split(" ")[1];
  // console.log("token", token);
  jwt.verify(token, "secret", function (err, decoded) {
    if (err) {
      res.send("Please login");
    } else {
      req.body.id = decoded.id;
      
      next();
    }
  });
};
module.exports = authentication;
