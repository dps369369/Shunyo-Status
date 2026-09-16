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

// Export controller functions
module.exports = {
    getProjects
};