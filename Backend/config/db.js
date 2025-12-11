import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Standard connection string (non-SRV) - more reliable for DNS issues
    const connectionString =
      process.env.MONGODB_URI ||
      "mongodb://heshanise:heshanise123@cluster0-shard-00-00.9cfh2cn.mongodb.net:27017,cluster0-shard-00-01.9cfh2cn.mongodb.net:27017,cluster0-shard-00-02.9cfh2cn.mongodb.net:27017/food-del?ssl=true&replicaSet=atlas-123abc-shard-0&authSource=admin&retryWrites=true&w=majority";

    await mongoose.connect(connectionString, {
      serverSelectionTimeoutMS: 5000,
      family: 4, // Use IPv4, skip trying IPv6
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error.message);
    console.log("\nTroubleshooting steps:");
    console.log("1. Check if MongoDB Atlas cluster is active (not paused)");
    console.log("2. Verify network connectivity");
    console.log("3. Check if your IP is whitelisted in MongoDB Atlas");
    console.log("4. Get the correct connection string from MongoDB Atlas");
    console.log("\nServer will continue running without database connection.");
  }
};
