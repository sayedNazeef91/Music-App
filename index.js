const express = require('express');
const http = require('http');

const cors = require('cors');
const compression = require('compression');
const fs = require('fs');

const App = express();

App.use(compression({ level: 9, memLevel: 9, threshold: 8192 }));

const package = JSON.parse(fs.readFileSync("./package.json"));
App.use(express.static(__dirname + '/dist' + "/" + package.name));

App.set('etag', 'strong');
App.use(cors());

App.get("/version", (request, response) => {

    response.send({"vid": "Version_Value"});
});

const errorHandler = (error, request, response) => {};
App.use(errorHandler);

const serverPort = 8000;
http.createServer(App).listen(serverPort, '0.0.0.0', () => {

    console.log('Applcation WebServer Started on Port ' + serverPort + ' with HTTPS Protocol.');
});
