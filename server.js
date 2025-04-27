const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

})

// Route 1 - Climate Crisis
app.get("/climate-crisis", (req, res) => {

})

// Route 2
app.get("/typesetting", (req, res) => {

})

// Route 3
app.get("/four-algorithms", (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});