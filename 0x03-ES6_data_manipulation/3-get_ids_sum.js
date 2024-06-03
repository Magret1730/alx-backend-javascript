// export default function getStudentIdsSum(students) {
//   console.log(students);
//   return students.reduce(myFunc, 0);

//   function myFunc(sum, student) {
//     return sum + student.id;
//   }
// }

export default function getListStudentIdsSum(students) {
    return students.reduce((sum, student) => sum + student.id, 0);
}
