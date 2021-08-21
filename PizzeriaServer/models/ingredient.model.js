const Mongoose = require("mongoose");

const IngredientSchema = new Mongoose.Schema({
  id: Number,
  tname: String,
  price: Number,
  image: String,
});

var IngredientModel = Mongoose.model(
  "ingredients",
  IngredientSchema,
  "ingredients"
);
module.exports = IngredientModel;
