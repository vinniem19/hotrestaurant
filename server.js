var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [{
   id: 1,
   name: "Chris",
   phone: 290-999-0000,
   email: "chris@Cogs.com"
}];

var waitingList = [{
   id: 2,
   name: "Simon",
   phone: 376-777-6354,
   email: "simon@Hunt.com"
}];

app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
 });

 