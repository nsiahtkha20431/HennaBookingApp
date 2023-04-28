import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import writeToFile from './lib/dataAccessLayer.js';

const app = express();
const PORT = 3001; //port for the server to listen on 

app.use(cors()); //allows web pages from any domain to make requests on the server (not automatically allowed becasue of security issues)
app.use(express.json());

// Configure multer to store uploaded images on disk
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Save the uploaded images in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    // Generate a unique filename using the current timestamp and the original file extension
    const uniqueFilename = Date.now() + path.extname(file.originalname);
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage });

app.post('/', upload.single('image'), (req, res) => {
  const { firstName, lastName, email, phone, bookingDate, bookingTime, bookingType, numOfPeople } = req.body;
  const image = req.file;

  const newBookingEntry = {
    firstName,
    lastName,
    email,
    phone,
    bookingDate,
    bookingTime,
    bookingType,
    numOfPeople ,
  };

  // Save the booking entry and image filename to the database (if an image is uploaded)
  if (image) {
    writeToFile(newBookingEntry, image.filename);
  } else {
    writeToFile(newBookingEntry);
  }

  console.log('Received data:');
  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log(`Booking Date: ${bookingDate}`);
  console.log(`Booking Time: ${bookingTime}`);
  console.log(`Booking Type: ${bookingType}`);
  console.log(`Total Number of People: ${numOfPeople}`);
  if (image) {
    console.log(`Image: ${image.originalname} (${image.mimetype}, ${image.size} bytes)`);
  } else {
    console.log('No image uploaded');
  }
});


app.listen(PORT, () => { //function to start a server that listens on the PORT
  console.log(`Henna App listening on port ${PORT}`); //when server is ready, callback funtion prnts this
});