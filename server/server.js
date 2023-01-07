import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001; //port for the server to listen on 

app.use(cors()); //allows web pages from any domain to make requests on the server (not automatically allowed becasue of security issues)
app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Hello, World!');
});

app.listen(PORT, () => { //function to start a server that listens on the PORT
  console.log(`Henna App listening on port ${PORT}`); //when server is ready, callback funtion prnts this
});

app.post('/', (req, res) => { //paramenters are URL, request, response)
    console.log(req.body); //req.body --> "request body"; prints the body of the POST request
    // res.send('Hello, World!');
});