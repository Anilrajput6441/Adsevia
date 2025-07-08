const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },

    // Facebook / Meta
    facebookToken: { type: String },
    facebookTokenExpiresIn: { type: Number },
    facebookAdAccounts: [{ type: String }],

    // Google, Instagram, LinkedIn (optional for future)
    // googleToken: { type: String },
    // instagramToken: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
