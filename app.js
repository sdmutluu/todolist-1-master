var fs = require('fs');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require('path');
var ejs = require("ejs");

app.set('view engine', 'ejs');


app.get("/", function (req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    

    if (today.getDay() === 6 || today.getDay() === 0) {
        day = "haftasonu";

    }
   
    else {
        day = "haftaici";
        res.render("list", {gunTuru: day })
    };

});


app.listen(3000, function (req, res) {
    console.log("server çalışıyor");
});