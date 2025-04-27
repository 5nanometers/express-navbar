const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

})

// Route 1 - Climate Crisis
app.get("/climate-crisis", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'climate-crisis', 'index.html'));
})

// Route 2
app.get("/typesetting", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'typesetting', 'index.html'));
})

// Route 3
app.get("/four-algorithms", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'four-algorithms', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});