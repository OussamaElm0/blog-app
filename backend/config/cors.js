const allowedOrigins = ["http://localhost:3000", "https://blog-oe.vercel.app"]; // Add your port number for localhost if it's not 3000

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowedOrigins.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true, credentials: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

module.exports = corsOptionsDelegate;
