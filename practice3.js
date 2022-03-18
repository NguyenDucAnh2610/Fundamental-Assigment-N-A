var helloString = 'Hello world! I\'m a newbie in programming.'

console.log(helloString.length);


function wordCount (str) {
    return str.split(' ').length;
};
console.log(wordCount(helloString));
console.log(helloString.indexOf('newbie'));
console.log(helloString.slice(19,-16));
console.log(helloString.replace('programming','PROGRAMMING'));
