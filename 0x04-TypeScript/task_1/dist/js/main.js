var TeacherImp = /** @class */ (function () {
    function TeacherImp(firstName, lastName, fullTimeEmployee, location, yearsOfExperience) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        this.yearsOfExperience = yearsOfExperience;
    }
    return TeacherImp;
}());
// Example usage
var teacher3 = new TeacherImp('John', 'Doe', false, 'London');
teacher3.contract = false;
console.log(teacher3);
// Example usage
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
// Implement printTeacher function
function printTeacher(firstName, lastName) {
    var firstLetter = firstName.charAt(0);
    return "".concat(firstLetter, ". ").concat(lastName);
}
// Example usage
console.log(printTeacher("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
//# sourceMappingURL=main.js.map