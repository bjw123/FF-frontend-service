const express = require("express");
const app = express();
const cfenv = require("cfenv");
const bodyParser = require('body-parser')
const request = require('request');
//cannot use helmet with leaflet js
//testing purposes
const cors = require('cors');
app.use(cors());


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));


const port = process.env.PORT || 4000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
    /*
    request('http://localhost:3000', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Print the google web page.
        }
    })

     */
});

//
//SPECIES SERVICE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Cards/List Species Data
app.get('/species', (req, res) =>{
    request('http://localhost:3000', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Print the google web page.
            res.send(body)
        }
    })

})

//GeoData Species
app.get('/quokkaData', (req, res) =>{
    request('http://localhost:3000/quokka', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Print the google web page.
            res.send(body)
        }
    })

})

app.get('/wgkData', (req, res) =>{
    request('http://localhost:3000/wgk', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Print the google web page.
            res.send(body)
        }
    })

})



//CHARITY SERVICE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Cards/List Charities
app.get('/charities', (req, res) =>{
    request('http://localhost:5000', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Print the google web page.
            res.send(body)
        }
    })

})

//Charity Info
app.get('/charity', (req, res) =>{
    request('http://localhost:5000', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Print the google web page.
            res.send(body)
        }
    })

})



//IBM WATSON NEWS ANALYSIS Service
app.get('/watson/news', (req, res) =>{
    //insert API CALL HERE

})
