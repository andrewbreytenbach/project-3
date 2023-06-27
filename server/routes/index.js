const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const express = require('express');


router.use('/api', apiRoutes);

// Serve up React front-end in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React app
  router.use(express.static(path.join(__dirname, '../../client/build')));

  // Route all requests to React app
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });
}

module.exports = router;
