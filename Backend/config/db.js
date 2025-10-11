import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://heshanise:heshanise123@cluster0.9cfh2cn.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
