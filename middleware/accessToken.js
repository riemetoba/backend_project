var jwt = require("jsonwebtoken");

let accessToken = function abc(req, res, next) {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json("Token not provided");
  }

  jwt.verify(
    token.split(" ")[1],
    process.env.JWT_SECRET_ACCESS,
    function (err, decoded) {
      if (decoded.role == "student") {
        res.send("permission denied");
      } else {
        next();
      }
    },
  );
};

module.exports = accessToken;
