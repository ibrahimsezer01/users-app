const { DataTypes } = require('sequelize');
const sequelize = require('../data/db');

const City = sequelize.define('City', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  });

  module.exports = City;