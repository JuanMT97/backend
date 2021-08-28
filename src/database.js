const mongoose = require('mongoose');

/*
mongoose.connect('mongodb://localhost/tpf', {
   useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));
*/

mongoose.connect('mongodb+srv://Juan:1234@tpf.upkyw.mongodb.net/tpf?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useFindAndModify: false,
   useUnifiedTopology: true
})
   .then(db => console.log('DB is connected'))
   .catch(err => console.log(err));