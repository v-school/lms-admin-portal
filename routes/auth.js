const express = require("express");
const authRoutes = express.Router();
const User = require("../models/users");

const jwt = require("jsonwebtoken");

const AuthError = function(message){
    Error.call(this, message);
    this.message = message;
    this.status = 403;
}

AuthError.prototype = Error.prototype;

authRoutes.route("/login")
    .post((req, res, next) => {
        User.findOne({ username: req.body.username }, (err, user) => {
            if (err) return next(err);
            if (!user) return next(new AuthError("No user found")) ;
            user.auth(req.body.password, isMatch => {
                if (!isMatch) return next(new AuthError("Invalid password"));
                const token = jwt.sign({ user: user._id }, process.env.SECRET);
                return res.status(200).send({ user: user.rmPwd(), token })
            });
        });
    });

module.exports = authRoutes;