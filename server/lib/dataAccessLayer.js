import fs from 'fs';

const filePath = './database.json';

const writeToFile = (jsonStringFromCaller) => {
    fs.writeFileSync(filePath, JSON.stringify(jsonStringFromCaller));
  }

  export default writeToFile;