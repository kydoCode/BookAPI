const Sequelize = require('sequelize'); // Majuscule ici
/* APpel a notre var d'env, on en a besoin */
require('dotenv').config();

// ON initialise sequelzie sur notre db

const sequelize = new Sequelize(
 // class on importe
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
)
// On exporte
module.exports = sequelize;