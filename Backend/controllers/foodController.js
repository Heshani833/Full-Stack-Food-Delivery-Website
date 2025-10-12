import foodModel from "../models/foodModel.js";
import path from "path";

// Add food item
const addFood = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("Request file:", req.file);

    let image_value = null;

    if (req.file) {
      // if request contains protocol/host info (reverse proxy), use it; otherwise fallback to filename
      const filename = req.file.filename;
      // prefer using the full URL path so frontend can directly use it
      const host = req.get("host");
      const protocol = req.protocol;
      image_value = `${protocol}://${host}/images/${filename}`;
    }

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: image_value,
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
const listFood = async (req, res) => {};

// Remove food item
const removeFood = async (req, res) => {};

export { addFood, listFood, removeFood };
