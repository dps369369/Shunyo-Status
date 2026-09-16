// Import Project service
const projectService = require("../services/projectService");

// Get Projects
const getProjects = async (req, res) => {
    const result = await projectService.getProjects();

    res.json({
        success: true,
        data: result
    });
};
// Get one Project by ID
const getProjectById = async (req, res) => {
    const result = await projectService.getProjectById(req.params.id);

    if (!result) {
        return res.status(404).json({
            success: false,
            error: {
                message: "Project not found."
            }
        });
    }

    res.json({
        success: true,
        data: result
    });
};
// Export controller functions
module.exports = {
    getProjects,
    getProjectById
};