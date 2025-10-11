import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

// App Config
const app = express();
const port = 4000;

// Middlewares
app.use(express.json());
app.use(cors());

//db connection
connectDB();

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

//mongodb+srv://heshanise:heshanise123@cluster0.9cfh2cn.mongodb.net/?

//mongodb+srv://heshanise:heshanise123@cluster0.9cfh2cn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
