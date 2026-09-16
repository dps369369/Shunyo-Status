// Import PostgreSQL
const { Pool } = require("pg");

// Create a PostgreSQL connection pool
// DATABASE_URL is already loaded by server.js
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

// Export the pool so other parts of the backend can use PostgreSQL
module.exports = pool;