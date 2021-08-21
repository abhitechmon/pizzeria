var PizzaModel = require("../models/pizza.model");

exports.finder = function (req, res) {
  PizzaModel.find({}).then(
    (data) => {
      // console.log(data);
      res.send(data);
    },
    (err) => {
      res.status(500).send({
        error: "Internal server error",
        err
      });
    }
  );
};
