//Itay Yaakov 206777989
//Kobi Nisim 313202996

const express = require("express");
const url = require("url");
const { costCollectionModel } = require("../models/costCollectionModel");
const {usersModel} = require("../models/usersModel")
const bodyParser = require("body-parser");
const router = express.Router();

/* Create new cost by post method while it is validate (for example same user_id, 1<day<31 , 1<month<12)
 and check that the status is 200 and catch if get status code 500 with error messege */

router.use(bodyParser.urlencoded({ extended: false }));  //Parser the data of the body
router.post("/", async function (req, res) {
 
    const user_id = req.body.user_id;
    const month = req.body.month;
    const day = req.body.day;
    const year = req.body.year;
    const currentDate = new Date();
  
    console.log(user_id)//Check
    
       await usersModel.findOne({id: user_id})
        .then((user) => {
        if (!user) return res.status(500).send("The User not found!");
        else {
          const updated_year = year || currentDate.getFullYear();
          const updated_month = month || currentDate.getMonth() + 1;
          const updated_day = day || currentDate.getDate();
  
          costCollectionModel.create(req.body)
          .then((cost) => {
            console.log(`create new costCollectionModel: ${costCollectionModel}`);
            res.status(200).send('Cost created succesfully');
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send('Error creating cost');
          });
        }});
});

 module.exports = router;