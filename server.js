// Create dependencies
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// sets static folder
app.use(express.static("client/build"));
// Allows for usage of defined routs
app.use(routes);

// Open server on PORT
app.listen(PORT, function() {
	console.log(`Listening to PORT ${PORT}`)
})