const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const evaluationRoutes = require('./routes/evaluationRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/evaluations', evaluationRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
