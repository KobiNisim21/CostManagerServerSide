//Itay Yaakov 206777989
//Kobi Nisim 313202996

//Variable that has spaciel abilities of the express .
//The express library knows how to manipulate the server.
const express = require("express");
// A module that allows us to an http server.
const http = require("http");
// A moudle that manipulates the address it receives.
const path = require("path");

//Variable that has the capability of express including routes listening.
const app = express();
const db = require("./data/mongoConnect")

// -MIDELAWARE- defenition of information pierser as Jason format
app.use(express.json());

const{routeInit} = require("./routes/config_route")
routeInit(app)
//Generates a server taht uses the app variable that has all the spacial capabilities of express.
const server = http.createServer(app);

//Listening to port 3001
let port =  3001;
server.listen(port, function(){ console.log("listen port 3001");});