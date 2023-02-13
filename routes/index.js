//Itay Yaakov 206777989
//Kobi Nisim 313202996

const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    // Json format
    const homePage =[{ message:"Express :)"} ]
    res.json(homePage)
})
 module.exports = router;