var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require('path');
var ejs = require("ejs");
var item = "";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function (req, res) {
    var today = new Date();
   
       
   var options = {
    weekday : "long",
    day: "numeric",
    month: "long"
   };

   var day = today.toLocaleDateString("tr-TR", options);
        
        res.render("list", { gunTuru: day, newlistItem: item });
    

});
app.post("/" , function (req, res) {
    item =req.body.newItem;
    res.redirect("/")
})


app.listen(3000, function (req, res) {
    console.log("server çalışıyor");
});