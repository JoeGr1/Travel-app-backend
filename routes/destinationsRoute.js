const express = require("express");

const fs = require("fs");

const router = express.Router();

router.get("/", (_req, res) => {
  fs.readFile("./data/destinations.json", null, (err, data) => {
    if (err) {
      return res.status(500).json({
        error: true,
        message: "Server error: could not retrieve data from JSON file",
      });
    }

    const destinations = JSON.parse(data);
    res.json(destinations);
  });
});

module.exports = router;
