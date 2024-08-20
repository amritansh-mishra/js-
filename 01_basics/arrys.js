const myArr=[0,1,2,3,5,6]
const myheroes = ["shaktiman",'naagraj']

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[1]);

// Array methods

 myArr.push(6)
 myArr.push(7)    // adds value to arryas
 console.log(myArr);
myArr.pop()       // array ki last value remove ho jaati h , (NO ARGUMENT REQUIRED.)
console.log(myArr.includes(9)); //Gives boolean type , INCLUDES - answers question.
console.log(myArr.indexOf(3)); //Gives integer type , if the input not present gives (-1).
 const newArr = myArr.join()
 console.log(myArr);
 console.log(newArr);

 // join() changes the type to string 


 // Slice, Splice

 console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

//Slice doesn't changes the original array but splice does, that's the biggest difference in between them.












