const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');  // Correct path for the admin router
const shopRoutes = require('./routes/shop');    // Correct path for the shop router

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Use the admin and shop routers
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

// 404 route handler for non-existent routes
app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});



















// const bodyParser = require("body-parser");
// const express = require("express");
// const app = express();

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(adminRoutes);
// app.use(shopRoutes);

// app.listen(5000, () => {
//   console.log("Server is running on port 5000");
// });

//Run this link
//http://localhost:5000
//http://localhost:5000/product
//http://localhost:5000/add-product
