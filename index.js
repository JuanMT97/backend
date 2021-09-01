const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({'message': 'Backend conectado'});
})

app.use('/usuarios', require('./routes/indexUsuario'));
app.use('/encuestas1y2Trimestre', require('./routes/indexEncuesta1y2Trimestre'));
app.use('/encuestas3Trimestre', require('./routes/indexEncuesta3Trimestre'));
app.use('/encuestasNeonato', require('./routes/indexEncuestaNeonato'));

mongoose.connect('mongodb+srv://Juan:1234@tpf.upkyw.mongodb.net/tpf?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useFindAndModify: false,
   useUnifiedTopology: true
})
   .then(db => console.log('DB conectada'))
   .catch(err => console.log(err));


app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});