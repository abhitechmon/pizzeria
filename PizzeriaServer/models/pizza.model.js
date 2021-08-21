const Mongoose = require("mongoose");

const PizzaSchema = new Mongoose.Schema({
  id: { type: String },
  type: { type: String },
  price: { type: Number },
  name: { type: String },
  image: { type: String },
  description: { type: String },
  ingredients: [String],
  topping: [String],
});
var collectionName = "pizza";
var PizzaModel = Mongoose.model("pizza",  PizzaSchema, collectionName,);
module.exports = PizzaModel;
