const express = require("express");
const router = express.Router();
const {
  connectToMeta,
  handleMetaCallback,
} = require("../controllers/metaController");
const verifyUser = require("../middlewares/verifyUser");

// /connect can be public, but /callback should be protected
router.get("/connect", connectToMeta);

// ✅ Add verifyUser to inject req.user.id from JWT
router.get("/callback", verifyUser, handleMetaCallback);

module.exports = router;
