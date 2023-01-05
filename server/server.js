const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Henna App listening on port ${PORT}`);
});

