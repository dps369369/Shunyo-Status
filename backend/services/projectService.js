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

// Export service functions
module.exports = {
    getProjects,
    getProjectById
};

