const express = require("express");
const router = express.Router();
const connectToDatabase = require("../models/db");

router.get('/', async (req, res) => {
  try {
    // Task 1
    const db = await connectToDatabase();

    // Task 2
    const collection = db.collection("gifts");

    // Task 3
    const gifts = await collection.find({}).toArray();

    // Task 4
    res.json(gifts);
  } catch (e) {
    console.error('Error fetching gifts:', e);
    res.status(500).send('Error fetching gifts');
  }
});

router.get('/:id', async (req, res) => {
  try {
    // Task 1
    const db = await connectToDatabase();

    // Task 2
    const collection = db.collection("gifts");

    const id = req.params.id;

    // Task 3
    const gift = await collection.findOne({ id: id });

    if (!gift) {
      return res.status(404).send('Gift not found');
    }

    res.json(gift);
  } catch (e) {
    console.error('Error fetching gift:', e);
    res.status(500).send('Error fetching gift');
  }
});

module.exports = router;