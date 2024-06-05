interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

class TeacherImp {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;

    constructor(
        firstName: string,
        lastName: string,
        fullTimeEmployee: boolean,
        location: string,
        yearsOfExperience?: number,
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        this.yearsOfExperience = yearsOfExperience;
    }
}

// Example usage
const teacher3: Teacher = new TeacherImp( 'John','Doe', false, 'London')
teacher3.contract = false;

console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// Define interface for printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement printTeacher function
function printTeacher(firstName: string, lastName: string): string {
    const firstLetter = firstName.charAt(0);

    return `${firstLetter}. ${lastName}`;
}

// Example usage
console.log(printTeacher("John", "Doe")); 
