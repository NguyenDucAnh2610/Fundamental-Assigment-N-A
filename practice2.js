// duplicated remove
const array1 = 
[1, 50,  28,  2, 5, 103, 496, 105, 108, 25, 36, 6, 50, 
 53, 289, 1003, 472, 105, 3, 899, 692, 1000, 289, 103];

 const array2= [];

 array1.forEach( (element) => {
     if (!array2.includes(element)) {
         array2.push(element);
     }
 });
//  odd , even
 const oddArr = [];
 const evenArr = []; 
 
 array2.forEach( (e) => {
     if (e % 2 === 0) {
         evenArr.push(e);
     } else {
         oddArr.push(e);
     }
});

/* soft compare
1 < 0 ... a come first
2 = 0 ... nothing change
3 > 0 ... b come first
 a - b
*/

//  ascending or descending.

// console.log(array2.sort((a, b) => a - b));
// console.log(array2.sort((b, a) => a - b));


// prime number

const primeNumber = [];
function checkPrime(number) {
    if (number <= 1) {
        return false;
    } else{
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true
    }
}

array2.forEach(function (element) {
    const isPrime = checkPrime(element);
    if (isPrime) {
        primeNumber.push(element);
    }
})
// console.log(primeNumber);


// perfect number

function isPerfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       return true
        } 
     else
        {
      return false
       
        }   
 } 

const   perfectNumber = [];

array2.forEach(function (element) {
    const checkPerfect = isPerfect(element);
    if (checkPerfect) {
        perfectNumber.push(element);
    }
});
console.log(perfectNumber);
