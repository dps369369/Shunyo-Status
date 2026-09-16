// Import Express
const express = require("express");

// Import Project controller
const projectController = require("../controllers/projectController");

// Create router
const router = express.Router();

// GET /projects
router.get("/projects", projectController.getProjects);

// Export router
module.exports = router;