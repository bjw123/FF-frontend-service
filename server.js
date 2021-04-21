const express = require("express");
const app = express();
const cfenv = require("cfenv");
const bodyParser = require('body-parser')
const request = require('request');
const cors = require('cors');

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));


//


const port = process.env.PORT || 4000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
    request('http://localhost:3000', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Print the google web page.
        }})
});
