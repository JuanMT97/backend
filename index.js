const express = require('express');
const app = express();
const cors = require('cors');

require('./database');

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/encuestas', require('./routes/index'));
app.use('/usuarios', require('./routes/indexUsuario'));
app.use('/encuestas1y2Trimestre', require('./routes/indexEncuesta1y2Trimestre'));
app.use('/encuestas3Trimestre', require('./routes/indexEncuesta3Trimestre'));
app.use('/encuestasNeonato', require('./routes/indexEncuestaNeonato'));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
