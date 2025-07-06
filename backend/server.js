const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");

// Load env vars
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/ads", aiRoutes); // This prefixes all aiRoutes with /api/ads

// Sample route
app.get("/", (req, res) => {
  res.send("Adsevia backend running 🚀");
});

// DB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("❌ DB connection failed:", err));
// app.listen(process.env.PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
// });
