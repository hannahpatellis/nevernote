const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
// If the Node mode is production (if we're running in production)
// then we want to setup our static file to point to client/build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app, that doesn't match
// another Express route
// Define any API routes before this runs
// This route is ALWAYS at the bottom of our routes list
// Catches anything that doesn't match an existing route
// and sends it to React
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
