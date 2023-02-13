//Itay Yaakov 206777989
//Kobi Nisim 313202996

//Run the routes
const addCostR = require("./addCost");
const reportR = require("./report");
const aboutR = require("./about");
const indexR = require("./index");

exports.routeInit = (app) =>{
    
app.use("/addCost",addCostR)
app.use("/report",reportR)
app.use("/about",aboutR)
app.use("/",indexR)

}
