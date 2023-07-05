const XLSX = require('xlsx');

let users = [];

for (let i = 1; i <= 25; i++) {
  let username = `Load Test User ${i}`;
  let email = `loadtest${i}@gmail.com`;
  
  let password = `123456`;

  let user = { username, email, password };
  users.push(user);
}

// Create a new workbook
const workbook = XLSX.utils.book_new();

// Create a new worksheet
const worksheet = XLSX.utils.json_to_sheet(users);

// Add the worksheet to the workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');

// Write the workbook to a file
XLSX.writeFile(workbook, 'users.xlsx');
