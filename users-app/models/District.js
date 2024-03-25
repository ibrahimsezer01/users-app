const { DataTypes } = require('sequelize');
const sequelize = require('../data/db');

const District = sequelize.define('District', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  });


  module.exports = District;