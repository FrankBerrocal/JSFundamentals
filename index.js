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