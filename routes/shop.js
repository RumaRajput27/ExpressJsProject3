const express = require('express');
const router = express.Router();

// Define shop routes
router.get('/', (req, res, next) => {
    res.send('<h1>Shop Page</h1>');
});

module.exports = router;  // Correctly export the router









// const express = require('express');

// const router = express.Router();

// router.get('/', (req, res, next) => {
//     res.send('<h1>Hello from Express!</h1>');
// });


// module.express = router;