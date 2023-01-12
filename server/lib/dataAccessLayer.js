import fs from 'fs';

const FILE_PATH = './database.json';

const writeToFile = (newBookingEntry) => {
    console.log(newBookingEntry);
    const fileData = fs.readFileSync(FILE_PATH);
    console.log(fileData);
    // fs.writeFileSync(FILE_PATH, JSON.stringify(newBookingEntry));
  }

  export default writeToFile;