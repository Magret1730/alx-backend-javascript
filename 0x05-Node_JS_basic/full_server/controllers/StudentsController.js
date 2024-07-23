const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      // Retrieve the database path from the command-line arguments
      const databasePath = process.argv[2];
      if (!databasePath) {
        res.status(500).send('Database path is not provided');
        return;
      }

      const studentsByField = await readDatabase(databasePath);
      console.log(`studentsByField:  ${studentsByField}`);

      const sortedFields = Object.keys(studentsByField)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      let responseText = 'This is the list of our students\n';
      for (const field of sortedFields) {
        const students = studentsByField[field];
        responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the databaseeeee');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;

      if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      // Retrieve the database path from the command-line arguments
      const databasePath = process.argv[2];
      if (!databasePath) {
        res.status(500).send('Database path is not provided');
        return;
      }

      const studentsByField = await readDatabase(databasePath);

      if (!studentsByField[major]) {
        res.status(200).send('List: ');
        return;
      }

      const students = studentsByField[major];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
