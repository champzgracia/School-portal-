const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Allow the server to receive form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve your website files
app.use(express.static(path.join(__dirname)));

// Test route
app.get("/api/test", (req, res) => {
    res.json({
        message: "School Portal backend is working!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`School Portal running on port ${PORT}`);
});
