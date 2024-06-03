// export default function updateStudentGradeByCity(students, city, newGrades) {
//   const newStudents = students.filter((student) => student.location === city)
//     .map((student) => {
//       const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
//       if (gradeObj) {
//         student.grade = gradeObj.grade;
//       } else {
//         student.grade = 'N/A';
//       }
//       return student;
//     });
//   return newStudents;
// }

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
