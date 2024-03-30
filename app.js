const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskroutes');
require("./db/conn")

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', taskRoutes);


const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
