const express = require("express");

const fs = require("fs");

const { v4: uuid } = require("uuid");

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

router.post("/:id/comments", (req, res) => {
  const paramId = req.params.id;
  const { name, comment } = req.body;

  const newComment = {
    name: name,
    comment: comment,
    timestamp: Date.now(),
    id: uuid(),
  };

  fs.readFile("./data/destinations.json", null, (err, data) => {
    if (err) {
      return res.status(500).json({
        error: true,
        message: "Server error: could not retrieve data from JSON file",
      });
    }

    const destinations = JSON.parse(data);
    const destination = destinations.find(
      (destination) => destination.id === paramId
    );

    destination.comments.push(newComment);

    console.log(destination.comments);

    fs.writeFile(
      "./data/destinations.json",
      JSON.stringify(destinations),
      (err) => {
        if (err) {
          return res.status(500).json({
            error: true,
            message: "Server error: could not retrieve data from JSON file",
          });
        }

        res.status(201).json(destination);
      }
    );
  });
});

module.exports = router;
