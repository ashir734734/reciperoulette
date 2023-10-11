const express = require("express");
const router = express.Router();
const {
  createRecipe,
  deleteRecipe,
  getRecipe,
} = require("../controller/receipeControllers");

//GET ALL RECIPES

try {
  router.get("/", getRecipe);
} catch (error) {
  console.log(error);
}

//CREATE RECIPE

try {
  router.post("/", createRecipe);
} catch (error) {
  console.log(error);
}

//DELETE RECIPE

try {
  router.delete("/:id", deleteRecipe);
} catch (error) {
  console.log(error);
}

module.exports = router;
