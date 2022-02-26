// Heroku app name: infinite-mesa-77956

const express = require('express');
const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals');
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Provides file path to the public folder, makes contents static resources
// All front-end code can now be accessed without having a specific server-side endpoint created for it
app.use(express.static('public'));




app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});