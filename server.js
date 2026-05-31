const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.get("/api/projects", (req, res) => {
    res.json([
        {
            id: 1,
            title: "Portfolio Website"
        },
        {
            id: 2,
            title: "Waste Collection Prediction System"
        }
    ]);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});