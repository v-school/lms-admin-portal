const express = require("express");
const fetch = require("node-fetch");
const expressJwt = require("express-jwt");

const submissionRoutes = express.Router();

// SUBMISSION API
const url = "https://api.vschool.io/assignment/submissions/";
const config = {
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
};

submissionRoutes.use("/", expressJwt({ secret: process.env.SECRET }));

submissionRoutes.route("/")
    .get((req, res, next) => {
        fetch(url, config)
            .then(response => {
                if (!response.ok) return next(Error(response.statusText));
                return response.json();
            })
            .then(data => res.status(200).send(data))
            .catch(err => next(err));
    })
submissionRoutes.route("/:id")
    .put((req, res, next) => {
        fetch(url + req.params.id, Object.assign({}, config,{
            method: "PUT",
            body: JSON.stringify(req.body)
        }))
            .then(response => {
                if (!response.ok) return next(Error(response.statusText));
                return response.json();
            })
            .then(data => res.status(200).send(data))
            .catch(err => next(err));
    })

module.exports = submissionRoutes;