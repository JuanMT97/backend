const express = require('express');
const app = express();
const cors = require('cors');

require('./database');

//Settings
app.set('port', 3000);

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/encuestas', require('./routes/index'));
app.use('/usuarios', require('./routes/indexUsuario'));
app.use('/encuestas1y2Trimestre', require('./routes/indexEncuesta1y2Trimestre'));
app.use('/encuestas3Trimestre', require('./routes/indexEncuesta3Trimestre'));
app.use('/encuestasNeonato', require('./routes/indexEncuestaNeonato'));

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
