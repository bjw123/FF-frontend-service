var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser')
const request = require('request');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post("/api/visitors", function (request, response) {
  var userName = request.body.name;
  var doc = { "name" : userName };
  if(!mydb) {
    console.log("No database.");
    response.send(doc);
    return;
  }
  insertOne[vendor](doc, response);
});

/**
 * Endpoint to get a JSON array of all the visitors in the database
 * REST API example:
 * <code>
 * GET http://localhost:3000/api/visitors
 * </code>
 *
 * Response:
 * [ "Bob", "Jane" ]
 * @return An array of all the visitor names
 */
/*
app.get("/api/visitors", function (request, response) {
  var names = [];
  if(!mydb) {
    response.json(names);
    return;
  }
  getAll[vendor](response);
});

 */

// load local VCAP configuration  and service credentials
var vcapLocal;
try {
  vcapLocal = require('./vcap-local.json');
  console.log("Loaded local VCAP", vcapLocal);
} catch (e) { }

const appEnvOpts = vcapLocal ? { vcap: vcapLocal} : {}

const appEnv = cfenv.getAppEnv(appEnvOpts);



//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});


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
  request('http://localhost:4000/quokka', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Print the google web page.
      res.send(body)
    }
  })

})

app.get('/wgkData', (req, res) =>{
  request('http://localhost:4000/wgk', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Print the google web page.
      res.send(body)
    }
  })

})

/*
const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: '{WqipI59T3pPZlTshaCoalrdNcrcp0k8vKuAaJcZSdOdp}',
  }),
  serviceUrl: '{https://api.us-south.discovery.watson.cloud.ibm.com/instances/20965335-5ee4-4058-b3c0-ef976fc70e09}',
});

const queryParams = {
  environmentId: '{system}',
  collectionId: '{news-en}',
  query: 'host::abc.net.au text:Quokka'
};

discovery.query(queryParams)
    .then(queryResponse => {
      console.log(JSON.stringify(queryResponse, null, 2));
    })
    .catch(err => {
      console.log('error:', err);
    });

 */

app.get('/watson/discovery', (req, res) =>{
  request('http://localhost:4000/wgk', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Print the google web page.
      res.send(body)
    }
  })

})