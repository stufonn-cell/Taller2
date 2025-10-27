require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const pokeneasApiRouter = require('./src/routes/pokeneasApi');
const pokeneasRouter = require('./src/routes/pokeneas');
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.use('/api', pokeneasApiRouter);
app.use('/view', pokeneasRouter);

app.get('/', (req, res) => {
  res.send("Works! Hi from Express.");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
