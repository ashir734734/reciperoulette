const recipe = require("../models/recipeModal");
const db = require("../db");

let getRecipe = async function (req, res) {
  const data = await recipe.aggregate([{ $sample: { size: 5 } }]);
  res.send(data);
};

let createRecipe = async function (req, res) {
  recipe.create(req.body).then(
    (data) => {
      res.send(data);
    },
    (error) => {
      console.log(error);
    },
  );
};

let deleteRecipe = async function (req, res) {
  recipe.deleteOne({ _id: req.params.id }).then(
    (data) => {
      res.send(data);
    },
    (error) => {
      console.log(error);
    },
  );
};

module.exports = { createRecipe, deleteRecipe, getRecipe };
