var CartModel = require("../models/cart.model");

exports.add = function (req, res) {
  var cartdata = new CartModel(req.body);
    // console.log(">>>>>>>>>>>>>>>",cartdata,"[[[[[[[[[[[[", req.body)
  cartdata.save().then(
    (newitem) => {
      console.log("New item added to cart database", newitem);
      res.send({ message: "item added" });
    },
    (error) => {
      console.log("Error in adding to database", error);
    }
  );
};

exports.finder = function (req, res) {
  CartModel.find({}).then(
    (data) => {
      // console.log(data);
      res.send(data);
    },
    (err) => {
      res.status(500).send({
        error: "Internal server error",
        err,
      });
    }
  );
};

exports.delete = function (req, res) {
  CartModel.deleteOne({ _id: req.params.id }).then(
    (data) => {
      console.log(data,"item deleted");
      res.status(204).send({ message: "item deleted" });
    },
    (err) => {
        console.log("Cart item doesn't exist!");
      res.status(500).send({
        error: "Cart item doesn't exist!",
        err,
      });
    }
  );
};
