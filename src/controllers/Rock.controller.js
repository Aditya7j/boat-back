const express = require("express");
const router = express.Router();
const Rock = require("../models/Rock.model");

router.get("", async (req, res) => {
    try {
      const rock  = await Rock.find().lean().exec();
      return res.status(200).send(rock);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  router.get("/sort/asc", async (req, res) => {
    try {
      const rock = await Rock.find().sort({price:1}).lean().exec();
      return res.status(200).send(rock);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  router.get("/sort/dsc", async (req, res) => {
    try {
      const rock  = await Rock.find().sort({price:-1}).lean().exec();
      return res.status(200).send(rock);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const rock  = await Rock.findById(req.params.id).lean().exec();
      return res.status(200).send(rock);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  router.post("", async (req, res) => {
    try {
      const rock = await Rock.create(req.body);
      return res.status(200).send(rock);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

module.exports = router;