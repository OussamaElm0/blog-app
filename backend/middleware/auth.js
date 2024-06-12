const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    try {
      // Verify the JWT token
      req.decodedToken = jwt.verify(token, "secretKey");
      next();
    } catch (err) {
      // If token verification fails, return a 401 Unauthorized error
      return res.status(401).json({ error: "Invalid token" });
    }
  } else {
    // If no token is provided, return a 401 Unauthorized error
    return res.status(401).json({ error: "No token provided" });
  }
};

module.exports = isAuthenticated
