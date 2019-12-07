// Dependencies
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const dotenv = require("dotenv");

// DB Config
const db = require('./config/keys').mongoURI;


dotenv.config();

// Init Middleware
app.use(express.json({extended: false}));

// Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));


app.use('/teams',  require('./routes/api/teams'));
app.use('/teams',  require('./routes/api/rosters'));
app.use('/teams',  require('./routes/api/players'));



mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
  // .then(() => console.log('MongoDB connected'))
  // .catch(err => console.log(err));
  mongoose.connection.once('open', function(){
    console.log('Conection has been made!');
        }).on('error', function(error){
     console.log('Error is: ', error);
      });

  mongoose.set('useCreateIndex', true)
  
// Body parser middleware
app.use(bodyParser.urlencoded({extended: true}));

// Serve static assets in production
if(process.env.NODE_ENV === 'production'){
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

// start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`We are live on port ${port}`)
});
