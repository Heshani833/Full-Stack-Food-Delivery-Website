import UserModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user

const loginUser = async (req, res) => {};

//register user

const registerUser = async (req, res) => {
const { name, email, password } = req.body;
try {
    // Check if user already exists
    const exists = await UserModel.findOne({ email });
    if (exists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }

    // Validate password strength
    if (password.length < 8) {
      return res
        .status(400)
        .json({ success: false, message: "Password is not strong enough" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

  const savedUser = await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });


} catch (error) {}

};

export { loginUser, registerUser };
