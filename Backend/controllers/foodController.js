import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";

// Add food item
const addFood = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("Request file:", req.file);

    let image_filename = null;

    if (req.file) {
      // Store just the filename, not the full URL
      image_filename = req.file.filename;
    }

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: image_filename,
      category: req.body.category,
    });

    await food.save();
    res.json({ success: true, message: "Food Added", food });
  } catch (error) {
    console.error("Error adding food:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// List food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error" });
  }
};

// Remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id); // find food by ID
    fs.unlink(`uploads/${food.image}`, () => {}); // delete image file

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood };
