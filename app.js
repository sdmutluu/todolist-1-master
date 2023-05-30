var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require('path');
var ejs = require("ejs");
var items = [];
let calısmaItem = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function (req, res) {
    let today = new Date();
   
       
   let options = {
    weekday : "long",
    day: "numeric",
    month: "long"
   };

   let day = today.toLocaleDateString("tr-TR", options);
        
   res.render("list", { gunTuru: day, newlistItems: items });
    

});
app.post("/" , function (req, res) {
    var item =req.body.newItem;
    if (req.body.list === "work"){
        calısmaItem.push(item)
        res.redirect("/work")
    }else {
        items.push(item);
        res.redirect("/") 
    }
   
   
})

app.get("/work" ,function (req, res) {
    res.render("list",{gunTuru:"calışma list", newlistItems: calısmaItem})
})


app.listen(3000, function (req, res) {
    console.log("server çalışıyor");
});