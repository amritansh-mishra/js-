const score = 400

const balance = new Number(100)
console.log(balance);
console.log(score);

console.log(balance.toString().length);

console.log(balance.toFixed(1));

const othernumber = 112.8966 //try 1123.8966
console.log(othernumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString()); 
//commmas according to usa standards


//+++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++

/*

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.max(4,9,5,7));
console.log(Math.min(4,9,5,7));

console.log(Math.random());
console.log(Math.random()*10+1);

*/

const min = 10
const max = 20
console.log((Math.random() *(max - min +10)+min));


