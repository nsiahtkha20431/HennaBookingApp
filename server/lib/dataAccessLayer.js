import fs from 'fs';

const FILE_PATH = '../database.json';

const writeToFile = (newBookingEntry, imageFilename) => {
    const fileData = fs.readFileSync(FILE_PATH, 'utf-8');
    const parsedData = JSON.parse(fileData);

    // Add the image filename to the new booking entry if an image is uploaded
    newBookingEntry.image = imageFilename ? `uploads/${imageFilename}` : null;
    parsedData.push(newBookingEntry);

    fs.writeFileSync(FILE_PATH, JSON.stringify(parsedData, null, 4), 'utf-8');
  };

  export default writeToFile;