const Evaluation = require('../models/evaluation');

exports.createEvaluation = async (req, res) => {
  try {
    const { nombre, puntuacion } = req.body;
    const newEvaluation = await Evaluation.create({ nombre, puntuacion });
    console.log(`Nuevo registro creado: Nombre - ${nombre}, Puntuación - ${puntuacion}`);
    res.status(201).json(newEvaluation);
  } catch (error) {
    console.error('Error al crear el registro:', error.message);
    res.status(500).json({ error: error.message });
  }
};
