// Import Express
const express = require("express");

// Import Project controller
const projectController = require("../controllers/projectController");

// Create router
const router = express.Router();

// GET /projects
router.get("/projects", projectController.getProjects);
// GET /projects/:id
router.get("/projects/:id", projectController.getProjectById);

// Export router
module.exports = router;