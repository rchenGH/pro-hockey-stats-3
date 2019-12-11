// Dependencies
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const connectDB = require('./config/db')


// Init Middleware
app.use(express.json({extended: false}));

// Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

app.use('/',  require('./routes/api/teams'));
app.use('/',  require('./routes/api/rosters'));
app.use('/',  require('./routes/api/players'));

// Connect Database
connectDB();
mongoose.set('useCreateIndex', true);

  
// Body parser middleware
app.use(bodyParser.urlencoded({extended: true}));

// Serve static assets in production

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, '/client/public')));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`We are live on port ${port}`)
});

