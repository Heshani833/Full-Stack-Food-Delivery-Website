import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Try with directConnection option to bypass SRV lookup
    await mongoose.connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://heshanise:heshanise123@cluster0.9cfh2cn.mongodb.net/food-del?retryWrites=true&w=majority",
      {
        serverSelectionTimeoutMS: 5000,
        family: 4, // Use IPv4, skip trying IPv6
        directConnection: false,
      }
    );
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error.message);
    console.log("\nTroubleshooting steps:");
    console.log("1. Check if MongoDB Atlas cluster is active (not paused)");
    console.log("2. Verify network connectivity");
    console.log("3. Check if your IP is whitelisted in MongoDB Atlas");
    console.log("4. Try using standard connection string instead of SRV");
  }
};
