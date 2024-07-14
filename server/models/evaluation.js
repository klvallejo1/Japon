const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Evaluation = sequelize.define('puntacions', { 
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  puntuacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
});

sequelize.sync()
  .then(() => {
    console.log('Puntacions table has been created.');
  })
  .catch((error) => {
    console.error('Error creating table:', error);
  });

module.exports = Evaluation;
