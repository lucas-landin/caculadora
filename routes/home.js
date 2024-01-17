const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <h1>Welcome</h1>
        <ul>
            <li><a href="/calculator">Go to Calculator</a></li>
        </ul>
    `);
});

module.exports = router;