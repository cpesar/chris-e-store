// import important parts of sequelize library
const { validate } = require('@babel/types');
const { Model, DataTypes } = require('sequelize');
const { values } = require('sequelize/types/lib/operators');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      //HOW TO VALIDATE IF THIS IS A DECIMAL
      validate: {
        isDecimal: true
      }
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //Set a default value of 10
      defaultValue: 10,

      //Validates that the value is numeric
      validate:{
        isNumeric: true
      }
    },

    category_id: {
      type: DataTypes.INTEGER,
      //References the category model's id
      references: {
        model: 'category',
        key: 'id'
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
