//Itay Yaakov 206777989
//Kobi Nisim 313202996

// getting-started.js
require('dotenv').config();
const mongoose = require('mongoose');
const { costCollectionModel } = require('../models/costCollectionModel');
const { usersModel } = require('../models/usersModel');

main().catch(err => console.log(err));

async function main() {
  const userName = process.env.USER_NAME;
  const password = process.env.PASSWORD;

  const url =`mongodb+srv://${userName}:${password}@cluster0.ch4p88o.mongodb.net/MyCostList?retryWrites=true&w=majority`
    mongoose.set("strictQuery", false); // Fix bug error in 2023
    await mongoose.connect
    (url, {useNewUrlParser: true});
}

const db = mongoose.connection

//If an error occured this event listener will be executed
db.on("error", () => {
    console.log("Error!\nCould not connect to the Data Base!");
  });
  
  //Once the database is opened this event listener will be executed
  db.once("open", () => {
    console.log("connected !");
});

const user = new usersModel({
    id: "123123",
    first_name: "Moshe",
    last_name: "Israeli",
    birthday: new Date(1990, 01, 10),
  });
  
  async function createUserIfNotExists(user) {
    try {
      // Check if user already exists
      const existingUser = await usersModel.findOne({id: user.id});
      if (existingUser) {
        console.log("User already exists, not creating");
        return existingUser;
      }
      // Create new user
      const newUser = await usersModel.create(user);
      console.log(`new User created: ${newUser}`);
      return newUser;
    } catch (err) {
      console.error(err);
      throw err;
    }
}

createUserIfNotExists(user).then(console.log);
exports.default = mongoose;
exports.default = usersModel;
