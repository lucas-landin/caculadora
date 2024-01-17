const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <form action="/calculator/calculate-grade" method="post">
            <input type="text" name="grade1" placeholder="Enter first grade" required />
            <input type="text" name="grade2" placeholder="Enter second grade" required />
            <button type="submit">Calculate Final Grade</button>
        </form>
    `);
});

router.post('/calculate-grade', (req, res) => {
    const grade1 = parseFloat(req.body.grade1);
    const grade2 = parseFloat(req.body.grade2);

    if (isNaN(grade1) || isNaN(grade2)) {
        return res.status(400).send("Invalid input, please enter numbers only.");
    }

    const finalGrade = (grade1 + grade2).toFixed(1);
    res.setHeader('Content-Type', 'text/html');
    res.send(`The final grade is: ${finalGrade}`);
});

module.exports = router;
