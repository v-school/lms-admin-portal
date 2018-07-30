const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// MIDDLEWARE
require("dotenv").config();
app.use(bodyParser.json());

//ROUTES
app.use("/auth", require("./routes/auth"));
app.use((req, res) => {
    res.status(404).end();
});

// CONNECTION
mongoose.connect(process.env.MONGOOSE_URI, { useNewUrlParser: true })
    .then(db => {
        console.log(`Connected to ${db.connections[0].name} db`);
        app.listen(process.env.PORT, () => console.log(`Connected to server on port ${process.env.PORT}`))
    })
    .catch(err => console.error(err));


