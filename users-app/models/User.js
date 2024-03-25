const { DataTypes } = require('sequelize');
const sequelize = require('../data/db');

const User = sequelize.define('User', {
  nickName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profile: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


// const bcrypt = require('bcrypt');
// User.beforeCreate(async (user) => {
//   try {
//     const hashedPassword = await bcrypt.hash(user.password, 10);
//     user.password = hashedPassword;
//   } catch (error) {
//     throw new Error('Password hashing failed');
//   }
// });


module.exports = User;
