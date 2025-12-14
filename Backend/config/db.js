import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Try local MongoDB first, then fallback to Atlas
    const connectionString =
      process.env.MONGODB_URI || "mongodb://localhost:27017/food-del"; // Local MongoDB
    // For Atlas: "mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority"

    await mongoose.connect(connectionString, {
      serverSelectionTimeoutMS: 5000,
      family: 4, // Use IPv4, skip trying IPv6
    });
    console.log(
      "DB Connected Successfully to:",
      connectionString.includes("localhost") ? "Local MongoDB" : "MongoDB Atlas"
    );
  } catch (error) {
    console.error("DB Connection Error:", error.message);
    console.log("\nTroubleshooting steps:");
    console.log("1. Check if MongoDB Atlas cluster is active (not paused)");
    console.log("2. Verify network connectivity");
    console.log("3. Check if your IP is whitelisted in MongoDB Atlas");
    console.log("   - Go to Atlas → Network Access → Add IP Address");
    console.log("   - Add 0.0.0.0/0 for development (allows all IPs)");
    console.log("4. Verify username/password are correct");
    console.log("\nServer will continue running without database connection.");
  }
};
