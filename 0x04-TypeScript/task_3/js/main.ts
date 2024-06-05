/// <reference path="./crud.d.ts" />

const CRUD = require('./crud');
import { RowID, RowElement } from './interface';

// Create a row object with type RowElement
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

// Insert row
const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(${JSON.stringify(row)})`);
// Output: Insert row {firstName: "Guillaume", lastName: "Salva"}

// Update row
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(${newRowID}, ${JSON.stringify(updatedRow)})`);
// Output: Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

// Delete row
CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID})`);
// Output: Delete row id 125
