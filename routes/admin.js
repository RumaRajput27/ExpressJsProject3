const express = require('express');
const router = express.Router();

// Define admin routes
router.get('/', (req, res, next) => {
    res.send('<h1>Admin Panel</h1>');
});

module.exports = router;  // Correctly export the router
