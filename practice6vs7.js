const promInput = prompt('Enter a number larger than 3 to draw a triangle');
let n = parseFloat(promInput);
if (n >= 3) {
    for (let triagle = '*'; triagle.length <= n; triagle += '*')
    console.log(triagle);
} else{
    alert('not valid');
}


if (n >= 3) {
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
} else {
    alert('not valid');
}