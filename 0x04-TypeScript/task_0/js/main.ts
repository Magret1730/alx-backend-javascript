// Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "Magret",
    lastName: "Oyedele",
    age: 35,
    location: "Johannesburg"
}

const student2: Student = {
    firstName: "Atom",
    lastName: "Silicon",
    age: 20,
    location: "Lagos"
}

// Array of the students
const studentsList: Student[] = [student1, student2];

// Step 3: Render a table using Vanilla JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    studentsList.forEach((student) => {
        const row = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);

        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(locationCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
});
