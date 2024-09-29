const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET /hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// GET /user
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Pritesh';
    const lastname = req.query.lastname || 'Patel';
    res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
