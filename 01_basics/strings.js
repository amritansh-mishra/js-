const name = "hitesh"
const repcount = 50

console.log(`hello my name is ${name} and my repo is ${repcount}`);

const gameName = new String ('hitesh')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt('2'));

console.log(gameName.indexOf('t'));


const newString2 = gameName.substring(0,4);
console.log(newString2);

//.trim = to remove spaces from the starting and last 

//trim start and trim end are also keys

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));

// split() splits the string on the basis of whatever input give.






