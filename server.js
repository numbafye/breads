// DEPENDENCIES
const { application } = require("express");
const express = require("express");

// CONFIGURATION (between .env and .js "node server.js")
require("dotenv").config();
const PORT = process.env.PORT;
console.log(PORT);

// ROUTES
application.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

// LISTEN
application.listen(PORT, () => {
    console.log('listening on port', PORT);
})
