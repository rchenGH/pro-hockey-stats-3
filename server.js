// Dependencies
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const fetch = require('node-fetch');

// DB Config
const db = require('./config/keys').mongoURI;


// Use Routes

app.use('/teams',  require('./routes/api/teams'))
app.use('/teams',  require('./routes/api/rosters'))
app.use('/teams',  require('./routes/api/players'))

mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  
// Body parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`We are live on port ${port}`)
});
