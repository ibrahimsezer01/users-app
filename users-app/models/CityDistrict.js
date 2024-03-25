const { DataTypes } = require('sequelize');
const sequelize = require('../data/db');

const CityDistrict = sequelize.define('CityDistrict', {
  CityId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  DistrictId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = CityDistrict