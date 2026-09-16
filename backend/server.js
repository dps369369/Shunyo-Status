// Load environment variables from .env
require("dotenv").config({
    path: "../.env"
});

// Import Express
const express = require("express");

// Import Project routes
const projectRoutes = require("./routes/projectRoutes");

// Import PostgreSQL connection pool
const pool = require("./config/database");

// Create Express application
const app = express();

// Server port
const PORT = 369;

// Parse JSON request bodies
app.use(express.json());

// Register Project routes
app.use(projectRoutes);

// Root route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Shunyo Status API is running."
    });
});

// Test PostgreSQL connection
pool.query("SELECT NOW()", (error, result) => {
    if (error) {
        console.error("PostgreSQL connection failed:", error);
        return;
    }

    console.log("PostgreSQL connected successfully.");
    console.log("Database time:", result.rows[0].now);
});

// Global error-handling middleware
app.use((error, req, res, next) => {
    console.error(error);

    res.status(500).json({
        success: false,
        error: {
            message: "Internal server error."
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Shunyo Status API running on http://localhost:${PORT}`);
});