const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Author = sequelize.define('Author', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthYear: {
        type: DataTypes.INTEGER
    }
})

module.exports = Author;