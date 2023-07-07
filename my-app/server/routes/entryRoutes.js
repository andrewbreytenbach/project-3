// entryRoutes.js is a file that contains the routes for the Entry model.
const router = require('express').Router();
const Entry = require('../models/Entry');

// Get all entries
router.get('/entries', async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (error) {
    console.error('Error fetching entries:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new entry
router.post('/entries', async (req, res) => {
  try {
    const { body, note, rating } = req.body;
    const newEntry = await Entry.create({ body, note, rating });
    res.json(newEntry);
  } catch (error) {
    console.error('Error creating entry:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update an entry
router.put('/entries/:entryId', async (req, res) => {
  try {
    const { entryId } = req.params;
    const { body, note, rating } = req.body;
    const updatedEntry = await Entry.findByIdAndUpdate(
      entryId,
      { body, note, rating },
      { new: true }
    );
    res.json(updatedEntry);
  } catch (error) {
    console.error('Error updating entry:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete an entry
router.delete('/entries/:entryId', async (req, res) => {
  try {
    const { entryId } = req.params;
    await Entry.findByIdAndRemove(entryId);
    res.json({ message: 'Entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting entry:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
