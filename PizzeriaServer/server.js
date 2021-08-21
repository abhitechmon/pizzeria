const express = require("express");
const Mongoose = require("mongoose");
const Port = process.env.PORT || 9000;
const dburl = "mongodb://localhost:27017/pizzeria";
const server = express();
const routes = require("./routes");
const bodyparser = require("body-parser");
const cors = require('cors');
const bcrypt=require('bcryptjs');

server.use(cors());
server.use(bodyparser.json());
server.use(routes);


server.listen(9000, () => {
  console.log("Server is listening on port 9000");
  Mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(
    () => {
      console.log("Connected to database");
    },
    (error) => {
      console.log("Error in connecting to database", error);
    }
  );
});