// Import PostgreSQL connection pool
const pool = require("../config/database");

// Get all Projects from PostgreSQL
const getProjects = async () => {
    const result = await pool.query(
        "SELECT id, name, status, last_update FROM projects ORDER BY id"
    );

    return result.rows;
};

// Export service functions
module.exports = {
    getProjects
};