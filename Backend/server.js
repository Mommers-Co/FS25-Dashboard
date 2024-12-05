const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require("pg");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// PostgreSQL client setup
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

client.connect();

// Middleware to parse JSON
app.use(cors());
app.use(bodyParser.json());

// Routes for API
const weatherRoutes = require("./routes/weather");
const fieldRoutes = require("./routes/fields");

app.use("/weather", weatherRoutes);
app.use("/fields", fieldRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
