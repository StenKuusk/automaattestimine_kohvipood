const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactPageController = require('./src/controllers/contactPageController.js');
const purchasePageController = require('./src/controllers/purchasePageController.js');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/contact', contactPageController);
app.use('/purchase', purchasePageController);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});