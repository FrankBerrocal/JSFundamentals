let display = "Hello World";
console.log(display);

//Required to display information.
let array = [];
for (let index = 0; index < 10; index++) {
  array[index] = index;
}

console.log(array);

let person = {
    id: 1,
    name: 'Gato',
    url: "www.test.com",
    date: new Date('2023-05-31T06:00:00')
};
console.log(person);
person.name = "Jerry";
console.log(person.name);

let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors.push('green');
console.log(selectedColors);
selectedColors.push(1);
console.log(selectedColors);


function createPerson(idValue, nameValue, urlValue, dateValue) {
    //body
    person.id = idValue;
    person.name = nameValue;
    person.url = urlValue;
    person.date = dateValue;

}

createPerson(2, 'Frank', 'Gato.com', '2023-10-10T17:45:00');
console.log(person);

function square (number){
    return number * number;
}

console.log(square(2));

//Operators
//Arithmetic

let x = 3;
let y = 10;

console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(x % y);  // modulus
console.log(x ** y);  //exponentiation


//Increment
console.log(x++); 
console.log(++x);

//Decrement
console.log(x--);
console.log(--x);
console.log(x);

//Assignment
//equal to assign value to a variable.
 x += 5;
 x *= 3;
 x %= 4;

 //Comparison
 //Relational
let z = 1;
// console.log(z > 1);
// console.log(z >= 1);
// console.log(z < 1);
// console.log(z <= 1);

 //Equality (strict:  same type, same value)
 console.log(1 === 1);  //true
 console.log('1' !== 1);  //true

  //Equality (loose:  different type, same value.  Value is converted)
  console.log(1 == 1);  //true 
  console.log('1' == 1);  //true.  Capture input and do not parse.
  console.log(true == 1);  //true.  0 or 1.



//Ternary
 let points = 110;
 let type = points > 100 ? 'gold' : 'silver';  //equivalent of if conditional.    I need to use this in a program.
// // ? then, : otherwise
// //if points greater than 100 then gold else silver
 console.log(type);


// //Logic operators
// //and, both should be true
 console.log(true && true);
 console.log(true && false);


// //or, only one should be true
 console.log(true || true);
 console.log(true || false);

//not, assigned to a variable directly
let logicExample =  false;
console.log(logicExample);

!logicExample;
let notTrue = !logicExample;  //is true if content is not true
console.log(notTrue);



//booleans and non-booleans
let userColor = 'red';
let defaultColor = 'blue';
let currentColor =  userColor || defaultColor;
console.log(currentColor);  //true

userColor = null;
currentColor =  userColor || defaultColor;
console.log(currentColor);  //blue


//Bitwise operators
//more theoretical

//1 = 00000001
//2 = 00000010
//bitwise OR adds the bits
//1 + 2 = 3 = 00000011
console.log(1 | 2);  // just one

//bitwise AND subtracts
//1 - 2 = 0 = 00000000
console.log(1 & 2); 

//precedence of operators
// *, /, from left to right + -


let a = 'red';
let b = 'blue';
console.log(a+' '+b);
let swapColorA = a === 'red' ? 'blue' : 'red';
let swapColorB = b === 'blue' ? 'red' : 'blue';
a = swapColorA;
b = swapColorB;
console.log(a+' '+b);

//Control Flow
//Conditional statements
//If else

let hour = 10;

if (hour > 6 && hour < 12){
  console.log('Good Morning');
}
else if (hour >= 12 && hour < 18){
  console.log('Good Afternoon');
}
else{
  console.log('Good early Morning');
}

//switch

let role;

role = 'guest';

switch(role){
  case 'guest' : 
    console.log('You are a guest');
    break;

  case 'admin' : 
    console.log('You are a admin');
    break;

  case 'user' : 
    console.log('You are a user');
    break;

  default:  
    console.log('You dont have access'); 
}


//This looks more organized and has less lines.
if(role === 'guest') console.log('You are a guest');
else if (role === 'admin') console.log('You are a admin');
else if (role === 'user') console.log('You are a user');
else console.log('You dont have access'); 

//For Loop
for (let i = 1; i <= 5; i++) {
  if(i%2!==0) console.log("hello", i)
}

//While loops

let i = 0;
while (i < 5) {
  if(i%2!==0) console.log("hello", i)
  i++;
}

let j=1;
do {
  if(j%2!==0) console.log("hello", j)
  j++;
} while (j <= 5);

//iterate properties in an object or elements in an array

const person2 = {
  name: 'Frank',
  lastName: 'Berrocal'
};

//for in
for (let key in person2) {
  console.log(person2[key]);
}


//array
let colors = ['red', 'blue', 'green'];

//for of
for (const key of colors) {
  console.log(key);
}

// break and continue
for (let index = 1; index <= 10; index++) {
  if(index===5) break;
  console.log(index);
}

//when even number found, do not display it
for (let index = 1; index <= 10; index++) {
  if(index%2===0) {
    continue;
    index++;
  }
  console.log(index);

}


let numero1 = 10;
let numero2 = 5;

maxNumber(5, 10);
//function that returns max of two numbers
function maxNumber(a, b){
  let numbers =[];
  numbers.push(a);
  numbers.push(b);
  let max = Math.max(...numbers);
  console.log('Max number is ', max)
}

maxNumberloop(5, 10);
function maxNumberloop(a, b){
  let temp = 0;
    if(a > b){
      console.log('Max is ', a);
    }else{
      console.log('Max is ', b);
    }
}

console.log(maxReduced(5, 10));
function maxReduced(a, b){
  if(a > b) return a
  else return b
}

let number = maxTernary(5, 10);
console.log(number);

function maxTernary(a, b){
  return (a>b) ? a : b;
}