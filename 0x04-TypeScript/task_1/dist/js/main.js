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
var teacher3 = new TeacherImp('John', 'Doe', false, 'London');
teacher3.contract = false;
console.log(teacher3);
//# sourceMappingURL=main.js.map