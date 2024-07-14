const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('japon_evaluacion', 'your-username', 'your-password', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
