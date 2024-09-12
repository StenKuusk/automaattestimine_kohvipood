const express = require('express');
const { Sequelize, DataTypes, Model } = require('sequelize');
const bodyParser = require('body-parser');

const router = express.Router();

const sequelize = new Sequelize('veebipood', 'root', 'qwerty', {
  host: 'localhost',
  dialect: 'mysql'
});

class Contact extends Model {}

Contact.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Contact'
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await Contact.sync();
    console.log('Contact model was synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/', async (req, res) => {
  console.log('Received contact form submission:', req.body);  
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).send('All fields are required');
    }
    const contact = await Contact.create({ name, email, message });
    res.status(200).json({ message: 'Message sent successfully', contact });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
