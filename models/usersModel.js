//Itay Yaakov 206777989
//Kobi Nisim 313202996

const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    id:Number,
    first_name:String,
    last_name:String,
    birthday:Date

})

const usersModel = mongoose.model("users",usersSchema);

exports.usersModel = usersModel;