// File: backend/controllers/metaController.js
const axios = require("axios");
const User = require("../models/User");

const FB_APP_ID = process.env.FB_APP_ID;
const FB_APP_SECRET = process.env.FB_APP_SECRET;
const REDIRECT_URI = "http://localhost:3001/api/meta/callback"; // Change in production

// Redirect user to Facebook login
exports.connectToMeta = (req, res) => {
  const redirectUrl = `https://www.facebook.com/v19.0/dialog/oauth?client_id=${FB_APP_ID}&redirect_uri=${REDIRECT_URI}&scope=ads_read,business_management,pages_show_list`;
  res.redirect(redirectUrl);
};

// Handle Facebook OAuth callback
exports.handleMetaCallback = async (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).json({ error: "Missing code" });

  try {
    // 1. Exchange code for access token
    const tokenRes = await axios.get(
      "https://graph.facebook.com/v19.0/oauth/access_token",
      {
        params: {
          client_id: FB_APP_ID,
          client_secret: FB_APP_SECRET,
          redirect_uri: REDIRECT_URI,
          code,
        },
      }
    );

    const accessToken = tokenRes.data.access_token;
    const expiresIn = tokenRes.data.expires_in;

    // 2. Fetch ad account info
    const accountRes = await axios.get(
      "https://graph.facebook.com/v19.0/me/adaccounts",
      {
        params: {
          access_token: accessToken,
        },
      }
    );

    const adAccounts = accountRes.data.data.map((acc) => acc.id);

    // 3. Save to user (replace with actual session user logic)
    const userId = req.user && req.user.id ? req.user.id : null; // Get real user ID from JWT
    if (!userId) {
      return res.status(401).json({ error: "User not authenticated" });
    }
    await User.findByIdAndUpdate(userId, {
      facebookToken: accessToken,
      facebookTokenExpiresIn: expiresIn,
      facebookAdAccounts: adAccounts,
      updatedAt: new Date(),
    });

    // 4. Redirect to frontend dashboard
    res.redirect("http://localhost:3000/dashboard");
  } catch (err) {
    console.error("Facebook login error:", err.message);
    res.status(500).json({ error: "Facebook login failed" });
  }
};
