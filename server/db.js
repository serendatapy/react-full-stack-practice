const mongoose = require('mongoose');
mongoose.connection.once('open', ()=> console.log('Connected to MongoDB'));
mongoose.connection.on('error', console.error.bind(console,'connection error:'));

mongoose.connect('mongodb://localhost:27017/top', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});


