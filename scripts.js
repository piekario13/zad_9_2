var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = maleNames.concat(femaleNames);
console.log(allNames);
var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
  console.log(allNames.indexOf(newName));
  var newName = allNames.push('Marian');
} console.log(allNames);