const mongoose = require("mongoose");

const recipeModal = new mongoose.Schema({
  dishname: { type: String, required: true },
  imageUrl: { type: String, required: true },
  recipe: { type: String, required: true },
});

const recipe = mongoose.model("recipe", recipeModal);

module.exports = recipe;
