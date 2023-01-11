import express from 'express';
import cors from 'cors';
import writeToFile from './lib/dataAccessLayer.js';


const app = express();
const PORT = 3001; //port for the server to listen on 
const FILE_PATH = 'database.json';


app.use(cors()); //allows web pages from any domain to make requests on the server (not automatically allowed becasue of security issues)
app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    writeToFile(req.body);
});

app.listen(PORT, () => { //function to start a server that listens on the PORT
  console.log(`Henna App listening on port ${PORT}`); //when server is ready, callback funtion prnts this
});