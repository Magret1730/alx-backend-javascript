export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const department in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      allEmployees = allEmployees.concat(report.allEmployees[department]);
    }
  }

  return {
    * [Symbol.iterator]() {
      for (const employee of allEmployees) {
        yield employee;
      }
    },
  };
}
