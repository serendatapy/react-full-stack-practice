const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');
const {router} = require('./router');
const connectDB = require('./db');

app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
  await connectDB;
  app.listen(PORT, ()=> {
    console.log(`Express Server listening On http://localhost:${PORT}`)
  });
})();

