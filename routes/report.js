//Itay Yaakov 206777989
//Kobi Nisim 313202996

const express = require("express");
const { costCollectionModel } = require("../models/costCollectionModel");
const router = express.Router();

router.get("/",async(req,res)=>{
    let user_id = req.query.user_id
    let month= req.query.month
    let year = req.query.year
    let data = await costCollectionModel.find({
        year: { $eq: year },
        month: { $eq: month },
        user_id: { $eq: user_id }
      })
  
    res.json(data)
})
 module.exports = router;