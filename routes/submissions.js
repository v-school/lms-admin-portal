const express = require("express");
const fetch = require("node-fetch");

const submissionRoutes = express.Router();

// SUBMISSION API
const url = "https://api.vschool.io/assignment/submissions";
const config = {
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
};

submissionRoutes.route("/")
    .get((req, res, next) => {
        //send out request
        fetch(url, config)
            .then(response => {
                if (!response.ok) return next(Error(response.statusText));
                return response.json();
            })
            .then(data => res.status(200).send(data))
            .catch(err => next(err));
    })

module.exports = submissionRoutes;