// Import PostgreSQL connection pool
const pool = require("../config/database");

// Get all Projects from PostgreSQL
const getProjects = async () => {
    const result = await pool.query(
        "SELECT id, name, status, last_update FROM projects ORDER BY id"
    );

    return result.rows;
};

// Get one Project by ID from PostgreSQL
const getProjectById = async (id) => {
    const result = await pool.query(
        "SELECT id, name, status, last_update FROM projects WHERE id = $1",
        [id]
    );

    return result.rows[0];
};

// Create a new Project
const createProject = async (project) => {
    const result = await pool.query(
        `INSERT INTO projects (name, status, last_update)
         VALUES ($1, $2, $3)
         RETURNING id, name, status, last_update`,
        [
            project.name,
            project.status,
            project.last_update
        ]
    );

    return result.rows[0];
};

// Update a Project
const updateProject = async (id, project) => {
    const result = await pool.query(
        `UPDATE projects
         SET name = $1,
             status = $2,
             last_update = $3
         WHERE id = $4
         RETURNING id, name, status, last_update`,
        [
            project.name,
            project.status,
            project.last_update,
            id
        ]
    );

    return result.rows[0];
};

// Delete a Project
const deleteProject = async (id) => {
    const result = await pool.query(
        `DELETE FROM projects
         WHERE id = $1
         RETURNING id, name, status, last_update`,
        [id]
    );

    return result.rows[0];
};

// Export service functions
module.exports = {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
};
