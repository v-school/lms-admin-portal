const express = require("express");
const authRoutes = express.Router();
const User = require("../models/users");

const jwt = require("jsonwebtoken");

authRoutes.route("/login")
    .post((req, res) => {
        User.findOne({ username: req.body.username }, (err, user) => {
            if (err) return res.status(500).send(err);
            if (!user) return res.status(403).send({ message: "Failed login attempt" });
            user.auth(req.body.password, isMatch => {
                if(!isMatch) return res.status(403).send({ message: "Failed login attempt" });
                const token = jwt.sign({user: user._id}, process.env.SECRET);
                return res.status(200).send({ user: user.rmPwd(), token })
            });
        });
    });

module.exports = authRoutes;