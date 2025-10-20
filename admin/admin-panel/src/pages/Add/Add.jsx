import React, { useState } from "react";
import "./add.css";
import { assets } from "../../assets/assets";

const Add = () => {
  const [image, setImage] = useState(false);

  return (
    <div className="add">
      <form className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input type="text" name="name" placeholder="Type Here" />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            name="description"
            rows="6"
            placeholder="Type Here"
            required
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category" required>
              <option value="" disabled selected>
                Select Category
              </option>
              <option value="pizza">Salad</option>
              <option value="burger">Rolls</option>
              <option value="noodles">Cake</option>
              <option value="pasta">Pasta</option>
              <option value="salad">Sandwich</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Pure Veg</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              type="number"
              name="price"
              placeholder="Type Here"
              required
            />
          </div>
        </div>

        <button type="submit" className="add-btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
