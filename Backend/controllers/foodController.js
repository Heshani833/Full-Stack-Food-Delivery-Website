import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add food item
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });
};

// List food items
const listFood = async (req, res) => {};

// Remove food item
const removeFood = async (req, res) => {};

export { addFood, listFood, removeFood };
