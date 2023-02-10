import fs from 'fs';

const FILE_PATH = '../database.json';

const writeToFile = (newBookingEntry) => {
    console.log(newBookingEntry);
    const fileData = fs.readFileSync(FILE_PATH, 'utf-8');

    const parsedData = JSON.parse(fileData);
    parsedData.push(newBookingEntry);

    fs.writeFileSync(FILE_PATH, JSON.stringify(parsedData, null, 4), 'utf-8');
  };

  export default writeToFile;