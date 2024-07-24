process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.trim(); // Remove any extra newline characters
  process.stdout.write(`Your name is: ${name}\n`);
  // console.log(`Your name is: ${name}`);
  // process.exit();

  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
    // console.log('This important software is now closing');
    // process.exit();
  });
});
