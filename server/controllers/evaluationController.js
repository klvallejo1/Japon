const Evaluation = require('../models/evaluation');

exports.createEvaluation = async (req, res) => {
  try {
    const { name, score } = req.body;
    const newEvaluation = await Evaluation.create({ name, score });
    res.status(201).json(newEvaluation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
