// requiring stuff
const express = require("express");
const apiRoutes = require("./routes/api/apiRoutes.js");
const htmlRoutes = require("./routes/html/htmlRouts.js");

//create express server
const app = express();

// sets pot for herouku or local 3000
const PORT = process.env.PORT || 3000;

// setting up express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// sets up api routes files
app.use(apiRoutes);
app.use(htmlRoutes);

app.listen (PORT, function() {
  console.log("App listening on PORT: " + PORT);
});