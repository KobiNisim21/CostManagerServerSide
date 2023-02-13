//Itay Yaakov 206777989
//Kobi Nisim 313202996

const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    // Json format
    const developers =[{"firstname":"Itay","lastname":"Yaakov","id":206777989,"email":"itayy1515@gmail.com"},
    {"firstname":"Kobi","lastname":"Nisim","id":313202996,"email":"kobinisim21@gmail.com"} ]
    res.json(developers)
})
 module.exports = router;