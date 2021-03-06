// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('public'))

// Spin up the server
const port = 8080;
const server = app.listen(port, listening);

// Callback to debug
function listening(){
    console.log(`running on localhost: ${port}`);
};

// Initialize all route with a callback function
app.get('/all', getData);

// Callback function to complete GET '/all'
function getData (request, response){
    console.log(projectData);
    response.send(projectData);
}

// Post Route
app.post('/add', callBack);

function callBack(request, response){

    projectData.temp = request.body.temp;
    projectData.date= request.body.date;
    projectData.content= request.body.content;

    response.send(projectData);
    console.log(projectData);
}
