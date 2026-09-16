// Import Project service
const projectService = require("../services/projectService");

// Get all Projects
const getProjects = async (req, res, next) => {
    try {
        const result = await projectService.getProjects();

        res.json({
            success: true,
            data: result
        });
    } catch (error) {
        // Send unexpected errors to the global error handler
        next(error);
    }
};

// Get one Project by ID
const getProjectById = async (req, res, next) => {
    try {
        const result = await projectService.getProjectById(req.params.id);

        // Return 404 if the Project does not exist
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
    } catch (error) {
        // Send unexpected errors to the global error handler
        next(error);
    }
};

// Create a new Project
const createProject = async (req, res, next) => {
    try {
        const result = await projectService.createProject(req.body);

        // Return 400 if validation fails
        if (result.validationError) {
            return res.status(400).json({
                success: false,
                error: {
                    message: result.validationError
                }
            });
        }

        // Return 409 if the Project name already exists
        if (result.conflictError) {
            return res.status(409).json({
                success: false,
                error: {
                    message: result.conflictError
                }
            });
        }

        res.status(201).json({
            success: true,
            data: result
        });
    } catch (error) {
        // Send unexpected errors to the global error handler
        next(error);
    }
};

// Update a Project
const updateProject = async (req, res, next) => {
    try {
        const result = await projectService.updateProject(
            req.params.id,
            req.body
        );

        // Return 400 if validation fails
        if (result.validationError) {
            return res.status(400).json({
                success: false,
                error: {
                    message: result.validationError
                }
            });
        }

        // Return 409 if the Project name already exists
        if (result.conflictError) {
            return res.status(409).json({
                success: false,
                error: {
                    message: result.conflictError
                }
            });
        }

        // Return 404 if the Project does not exist
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
    } catch (error) {
        // Send unexpected errors to the global error handler
        next(error);
    }
};

// Delete a Project
const deleteProject = async (req, res, next) => {
    try {
        const result = await projectService.deleteProject(req.params.id);

        // Return 404 if the Project does not exist
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
    } catch (error) {
        // Send unexpected errors to the global error handler
        next(error);
    }
};

// Export controller functions
module.exports = {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
};