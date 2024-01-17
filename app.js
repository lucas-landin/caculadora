const express = require("express");
const helmet = require("helmet");
const homeRoutes = require("./routes/home");
const calculatorRoutes = require("./routes/calculator");

const app = express();
const port = 4000;

app.use(helmet());
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRoutes);
app.use('/calculator', calculatorRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});