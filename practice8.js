//input information
var inputFistName = prompt('FirstName')
var inputLastName = prompt('LastName')
var inputAge = prompt('Age')
var inputGender = prompt('Gender')
var inputSchool = prompt('School')
var inputAddress = prompt('Address')

//create Table
var table = document.createElement('table');

//create Table Header
var header = ['Fist name', 'Last name', 'Age', 'Gender', 'School', 'Address' ];
var tr=document.createElement('tr');
for(var column in header)
{   
  var th=document.createElement('th');
  th.innerHTML = header[column];
  tr.appendChild(th)
}
table.appendChild(tr);

//create Table Body
var input = [
  [inputFistName, inputLastName, inputAge, inputGender, inputSchool, inputAddress],
  
];

for(var row in input)
{
    var tr=document.createElement('tr');
    for(var column in input[row]){
      
        var td=document.createElement('td');
        td.innerHTML = input[row][column];
        tr.appendChild(td)
        
    }
    table.appendChild(tr);
}

// append Table
document.body.appendChild(table);