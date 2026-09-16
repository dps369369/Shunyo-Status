// Import Express
const express = require("express");

// Create the Express application
const app = express();

// Choose the port for our backend server
const PORT = 369;

// Middleware
// Allows Express to understand JSON request bodies
app.use(express.json());

// Basic test route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Shunyo Status API is running."
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Shunyo Status API running on http://localhost:${PORT}`);
});