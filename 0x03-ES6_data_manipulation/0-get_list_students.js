export default function getListStudents() {
  const arr = [];

  const Gui = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const James = { id: 2, firstName: 'James', location: 'Columbia' };
  const Serena = { id: 5, firstName: 'Serena', location: 'San Francisco' };

  arr.push(Gui, James, Serena);

  return arr;
}
