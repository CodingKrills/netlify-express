'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors')

app.use(cors());

// Connection to MongoDB
// /Connection to MongoDB
mongoose
  .connect(
    'mongodb+srv://MyUsername:MyPassword@mycluster-rkncu.mongodb.net/Paramafashion?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.use(bodyParser.json());

app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));


const caroselAndBannerModel = require('./models/AllCaroselAndBannerDesign');

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});

router.get('/another', (req, res) => res.json("ANOTHER"));
router.post('/', (req, res) => res.json({ postBody: req.body }));

//============================GET============================//

router.get('/get_banner_and_carosel', async (req, res) => {

  const caroselAndBanner = await caroselAndBannerModel.find({});

  res.json(caroselAndBanner);

})

//==============================================================//

module.exports = app;
module.exports.handler = serverless(app);
