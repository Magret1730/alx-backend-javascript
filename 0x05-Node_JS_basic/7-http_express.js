const fs = require('fs');
const express = require('express');

const app = express();

function countStudents(path) {
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
      const studentsByField = {};

      // Process each line
      for (const line of lines) {
        const parts = line.split(',');

        // Check if the line has the expected number of parts
        if (parts.length === 4) {
          const firstname = parts[0];
          const field = parts[3];

          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }

          studentsByField[field].push(firstname);
        }
      }

      // Calculate the total number of students
      const fieldValues = Object.values(studentsByField);
      const totalStuden = fieldValues.reduce((acc, fieldStudents) => acc + fieldStudents.length, 0);

      let result = `Number of students: ${totalStuden}\n`;
      for (const [field, students] of Object.entries(studentsByField)) {
        result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  try {
    const result = await countStudents(process.argv[2]);
    res.end(result);
  } catch (err) {
    res.end(err.message);
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
