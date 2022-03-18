var inputMath = prompt('Input your math mark');
var inputPhysical = prompt('Input your physical mark');
var inputChemistry = prompt('Input your chemistry mark');

const mathMark = parseFloat(inputMath);
const mathPhysical = parseFloat(inputPhysical);
const mathChemistry = parseFloat(inputChemistry);

averageMark = Math.round(((mathMark + mathChemistry + mathPhysical)/3)*10)/10;

console.log(Math.round(averageMark * 10)/10);

if (averageMark < 5.0) {
    rank = 'D;'
   alert(`Your average mark is ${averageMark}. Your rank is ${rank}`);

} else if (averageMark >= 5 && averageMark < 6.5) {
    rank = 'C;'
   alert(`Your average mark is ${averageMark}. Your rank is ${rank}`);

} else if (averageMark > 6.5 && averageMark < 8) {
    rank = 'B;'
    alert(`Your average mark is ${averageMark}. Your rank is ${rank}`);
} else if (averageMark >= 8 && averageMark <= 10) {
    rank = 'A;'
   alert(`Your average mark is ${averageMark}. Your rank is ${rank}`);
} else if (averageMark > 10) {
    alert('not valid'); 
}
    