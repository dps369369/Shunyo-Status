// Import Express
const express = require("express");

// Create router
const router = express.Router();

// Project test route
router.get("/projects", (req, res) => {
    res.json({
        success: true,
        message: "Projects route is working."
    });
});

// Export router
module.exports = router;