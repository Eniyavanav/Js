
const fs= require('fs');
/*fs.appendFile('message.txt', 'data to append', function (err) {
  if (err) throw err;
  console.log('Saved!');
});*///fs.appendFileSync('message.txt', 'data to append');
const os = require('os');
const notes = require('./notes.js');
var user = os.userInfo();
var res = notes.addnotes(2,5);
console.log(user.username);
console.log(res);
//fs.appendFile('message.txt',);
/*fs.appendFile('message.txt', `data to append ${user.username} ,You are just ${notes.add}`, function (err) {
  if (err) throw err;
  console.log('Saved!');
});*/