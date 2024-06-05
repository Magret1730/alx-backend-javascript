/// <reference path="./crud.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var CRUD = require('./crud');
// Create a row object with type RowElement
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
// Insert row
var newRowID = CRUD.insertRow(row);
console.log("CRUD.insertRow(".concat(JSON.stringify(row), ")"));
// Output: Insert row {firstName: "Guillaume", lastName: "Salva"}
// Update row
var updatedRow = __assign(__assign({}, row), { age: 23 });
CRUD.updateRow(newRowID, updatedRow);
console.log("CRUD.updateRow(".concat(newRowID, ", ").concat(JSON.stringify(updatedRow), ")"));
// Output: Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}
// Delete row
CRUD.deleteRow(newRowID);
console.log("CRUD.deleteRow(".concat(newRowID, ")"));
export {};
// Output: Delete row id 125
//# sourceMappingURL=main.js.map