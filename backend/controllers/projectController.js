// Project controller
const getProjects = (req, res) => {
    res.json({
        success: true,
        message: "Projects controller is working."
    });
};

// Export controller functions
module.exports = {
    getProjects
};