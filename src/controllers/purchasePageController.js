const express = require('express');
const { Sequelize, DataTypes, Model } = require('sequelize');
const bodyParser = require('body-parser');

const router = express.Router();

const sequelize = new Sequelize('veebipood', 'root', 'qwerty', {
  host: 'localhost',
  dialect: 'mysql'
});

class Purchase extends Model {}

Purchase.init({
  cardNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  expiryDate: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cvv: {
    type: DataTypes.STRING,
    allowNull: false
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Purchase'
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await Purchase.sync();
    console.log('Purchase model was synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/', async (req, res) => {
  console.log('Received purchase form submission:', req.body);  
  try {
    const { cardNumber, expiryDate, cvv, totalPrice } = req.body;
    if (!cardNumber || !expiryDate || !cvv || !totalPrice) {
      return res.status(400).send('All fields are required');
    }
    const purchase = await Purchase.create({ cardNumber, expiryDate, cvv, totalPrice });
    res.status(200).json({ message: 'Purchase made successfully', purchase });
  } catch (err) {
    console.error('Error saving purchase:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;