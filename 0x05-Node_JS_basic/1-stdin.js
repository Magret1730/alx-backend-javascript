process.stdin.setEncoding('utf8');
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.trim(); // Remove any extra newline characters
  console.log(`Your name is: ${name}`);

  process.stdin.on('end', () => {
    // process.stdout.write('end');
    console.log('This important software is now closing');
    // process.exit();
  });
});
