var IngredientModel = require("../models/ingredient.model");

exports.finder = function (req, res) {
  IngredientModel.find({}).then(
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
