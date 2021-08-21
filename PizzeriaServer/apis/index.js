const express = require("express");
const router = express.Router();

const pizza = require("./pizzas");
const ingredient = require("./ingredients");
const cart = require("./cart");
const user=require("./user");

router.get("/pizzas", pizza.finder);

router.get("/ingredient", ingredient.finder);

router.get("/cart", cart.finder);
router.post("/cart/add", cart.add);
router.delete("/cart/delete/:id", cart.delete);

router.post('/register', user.register);
router.post('/login', user.login);

module.exports = router;
