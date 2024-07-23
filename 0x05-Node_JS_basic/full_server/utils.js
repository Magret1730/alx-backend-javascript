const fs = require('fs');

function readDatabase(path) {
  console.log(`path: ${path}`);
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the file content by new lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // If the file is empty (except header), throw an error
      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Remove the header line
      lines.shift();

      // Create a map to store the students by field
      const studentsFirstName = {};

      // Process each line
      for (const line of lines) {
        const parts = line.split(',');

        // Check if the line has the expected number of parts
        if (parts.length === 4) {
          const firstname = parts[0];
          const field = parts[3];

          if (!studentsFirstName[field]) {
            studentsFirstName[field] = [];
          }

          studentsFirstName[field].push(firstname);
        }
      }
      console.log(`studentsFirstName in util:  ${studentsFirstName}`);
      resolve(studentsFirstName);
    });
  });
}

module.exports = readDatabase;
