// Import Express
const express = require("express");

// Import Project controller
const projectController = require("../controllers/projectController");

// Create router
const router = express.Router();
// POST /projects
router.post("/projects", projectController.createProject);
// PUT /projects/:id
router.put("/projects/:id", projectController.updateProject);
// DELETE /projects/:id
router.delete("/projects/:id", projectController.deleteProject);
// GET /projects
router.get("/projects", projectController.getProjects);
// GET /projects/:id
router.get("/projects/:id", projectController.getProjectById);

// Export router
module.exports = router;