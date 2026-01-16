const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// allow JSON + CORS
app.use(cors());
app.use(express.json());

// Railway gives the correct port in env
const PORT = process.env.PORT || 8080;

// your DB URI
const MONGODB_URI =
  "mongodb+srv://shubhra1337:SHUBHRA1337@cluster0.j17wxuq.mongodb.net/mbtiDB?retryWrites=true&w=majority";

console.log("🚨 SERVER FILE IS RUNNING");
console.log("🚨 PORT:", PORT);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    // HEALTH ROUTE (Railway needs this)
    app.get("/health", (req, res) => {
      res.json({ status: "Server running 🚀" });
    });

    // START SERVER
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB error:", err.message);
    process.exit(1);
  });
