const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// MIDDLEWARE
require("dotenv").config();
app.use(bodyParser.json());

//ROUTES
app.use("/api/auth", require("./routes/auth"));
app.use("/api/submissions", require("./routes/submissions"));

//HANDLE ERRORS
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.statusMessage = err.message;
        return res.status(err.status || 500).send();
    });
}

app.use((err, req, res, next) => {
    res.statusMessage = err.message;
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: {}
    });
});

// CONNECTION
mongoose.connect(process.env.MONGOOSE_URI, { useNewUrlParser: true })
    .then(db => {
        console.log(`Connected to ${db.connections[0].name} db`);
        app.listen(process.env.PORT, () => console.log(`Connected to server on port ${process.env.PORT}`))
    })
    .catch(err => console.error(err));


