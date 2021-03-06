const express = require("express");

const Specie = require("./Specie.js");

const router = express.Router();

// add endpoints here
router.get("/", (req, res) => {
  Specie.find({})
    .then(specie => {
      res.status(200).json(specie);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: err.message });
    });
});

module.exports = router;
