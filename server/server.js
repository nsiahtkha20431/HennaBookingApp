import express from 'express';
import cors from 'cors';
import multer from 'multer';
import writeToFile from './lib/dataAccessLayer.js';

const app = express();
const PORT = 3001; //port for the server to listen on 

// Configure multer storage and file limits
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });


app.use(cors()); //allows web pages from any domain to make requests on the server (not automatically allowed becasue of security issues)
app.use(express.json());

// app.post('/', (req, res) => {
//   // console.log(req.body);
//   writeToFile(req.body);
// });

app.post('/', upload.fields([{ name: 'image' }]),Changein (req, res) => { // Add multer middleware to handle file upload
  // Access form data from req.body and the image from req.file
  console.log(req.body);
  console.log(req.file);

  writeToFile(req.body);

  res.json({ 
    message: 'Form data and image received',
    formData: req.body,
    file: req.file, 
  });
});

app.listen(PORT, () => { //function to start a server that listens on the PORT
  console.log(`Henna App listening on port ${PORT}`); //when server is ready, callback funtion prnts this
});