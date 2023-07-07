// listRoutes.js  is a file that contains the routes for the List model.
const router = require('express').Router();
const List = require('../models/List');

// Get all lists
router.get('/lists', async (req, res) => {
  try {
    const lists = await List.find();
    res.json(lists);
  } catch (error) {
    console.error('Error fetching lists:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new list
router.post('/lists', async (req, res) => {
  try {
    const { title } = req.body;
    const newList = await List.create({ title });
    res.json(newList);
  } catch (error) {
    console.error('Error creating list:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a list
router.put('/lists/:listId', async (req, res) => {
  try {
    const { listId } = req.params;
    const { title } = req.body;
    const updatedList = await List.findByIdAndUpdate(
      listId,
      { title },
      { new: true }
    );
    res.json(updatedList);
  } catch (error) {
    console.error('Error updating list:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a list
router.delete('/lists/:listId', async (req, res) => {
  try {
    const { listId } = req.params;
    await List.findByIdAndRemove(listId);
    res.json({ message: 'List deleted successfully' });
  } catch (error) {
    console.error('Error deleting list:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
