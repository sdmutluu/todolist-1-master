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

   


    
    
       
        switch (currentDay) {
            case 0:
                day: "Pazar"
                break;
            case 1:
                day: "Pazartesi"
                break;
            case 2:
                day: "salı"
                break;
            case 3:
                day: "çarşamba"
                break;
            case 4:
                day: "Perşembe"
                break;
            case 5:
                day: "cuma"
                break;
            case 6:
                day: "cumartesi"
                break;
            default:
                break;
        } 
        
        res.render("list", { gunTuru: day })
    

});


app.listen(3000, function (req, res) {
    console.log("server çalışıyor");
});