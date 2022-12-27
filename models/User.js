const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isAlphanumeric: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validation: {
      len: [6]
    }
  }
}, {
  hooks: {
    beforeCreate: async(newUser) => {
      newUser.password = await bcrypt.hash(newUser.password, 10);
      return newUser;
    },
    beforeUpdate: async(updateUser) => {
      updateUser.password = await bcrypt.hash(updateUser.password, 10);
      return updateUser;
    }
  },
  sequelize, 
  freezeTableName: true,
})

module.exports = User;