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



//  1. Incoming JSON(customer): if (tables.length <= 4), then POST object to waitingList, else post object to tables.
if (tables.length <= 4) {
    app.post("/api/tables", function(req, res) {
        var newcustomer = req.body;
        console.log(newcustomer);
        tables.push(newcustomer);
        // res.sendFile(newcustomer); <---displaying new customer data to HTML page
        // JQuery to update page dynamically
        });
        } else {
        app.post("/api/waitinglist", function(req, res) {
        var newcustomer = req.body;
        console.log(newcustomer);
        waitingList.push(newcustomer);
        // res.json(newcustomer); <---displaying new customer data to HTML page
        // JQuery to update page dynamically
        });
    };

// 2. Create a set of routes that then display this data as JSONs. Users should be given these JSONs if they visit the appropriate page (i.e. if a user visits localhost:3000/api/tables they should see a JSON of table data).

app.get("/api/tables", function (req, res){
    res.json(tables);
});

app.get("/tables", function (req, res){
    res.sendfile("/tables.html");
});

app.get("api/waitlist", function (req, res){
    res.json(waitingList);
});

app.get("/reservations", function (req, res){
    res.sendfile("/reservations.html");
});

app.get("/", function (req, res){
    res.sendfile("/hotrestaurant.html");
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });