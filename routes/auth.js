const express = require("express");
const User = require("../models/users");
const authRoutes = express.Router();

authRoutes.route("/login")
    .post((req, res) => {
        User.findOne({ username: req.body.username }, (err, user) => {
            if (err) return res.status(500).send(err);
            if (!user) return res.status(403).send({ message: "Failed login attempt" });
            user.auth(req.body.password, isMatch => {
                if (isMatch) return res.status(200).send({ message: "Login successful" })
                return res.status(403).send({ message: "Failed login attempt" });
            });
        });
    });

module.exports = authRoutes;