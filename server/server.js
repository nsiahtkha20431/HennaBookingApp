const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Hello, World!');
});

app.listen(3001, () => {
  console.log('Henna App listening on port 3001');
});

