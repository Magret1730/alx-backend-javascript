import { taskFirst, taskNext, getLast } from './0-constants.js';

// test function taskFirst() {
//   const task = 'I prefer const when I can.';
//   return task;
// }

// test function getLast() {
//   return ' is okay';
// }

// test function taskNext() {
//   let combination = 'But sometimes let';
//   combination += getLast();

//   return combination;
// }

// 0-constants.test.js
// import { taskFirst, taskNext } from './0-constants.js';

test('taskFirst returns correct string', () => {
  const result = taskFirst();
  expect(result).toBe('I prefer const when I can.');
});

test('getLast returns correct string', () => {
  const result = getLast();
  expect(result).toBe(' is okay');
});

test('taskNext returns correct string', () => {
  const result = taskNext();
  expect(result).toBe('But sometimes let is okay');
});

