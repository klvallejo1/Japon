const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Evaluation = sequelize.define('Evaluation', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

sequelize.sync()
    .then(() => {
        console.log('Evaluations table has been created.');
    })
    .catch((error) => {
        console.error('Error creating table:', error);
    });

module.exports = Evaluation;
