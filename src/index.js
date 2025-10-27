require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const pokeneasApiRouter = require('./routes/pokeneasApi');
const pokeneasViewRouter = require('./routes/pokeneasView');
const images = requiere('../public/images');
const port = 3000

app.use(express.json());
app.use('/images', images);
app.use('/api', pokeneasApiRouter);
app.use('/view', pokeneasViewRouter);

app.get('/', (req, res) => {
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
