const Mongoose = require("mongoose");

const CartSchema = new Mongoose.Schema({
  id: { type: String },
  type: { type: String },
  price: { type: Number },
  name: { type: String },
  image: { type: String },
  description: { type: String },
  ingredients: [String],
  topping: [String],
  qty: { type: Number },
});
var collectionName = "cart";
var CartModel = Mongoose.model("cart", CartSchema, collectionName);
module.exports = CartModel;
