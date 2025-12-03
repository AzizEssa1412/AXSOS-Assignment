// 1. Original Code:
const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars

console.log(randomCar)
console.log(otherRandomCar)

// Output:
// Tesla
// Mercedes 


//-------------------------------------------------------------------------------


// 2. Original Code:
const employee = { name: 'Elon', age: 47, company: 'Tesla' }
const { name: otherName } = employee;

console.log(name);
console.log(otherName);

// Output:
// ReferenceError: name is not defined
//elon


//-------------------------------------------------------------------------------


// 3. Original Code:
const person = { name: 'Phil Smith', age: 47, height: '6 feet' }
const password = '12345';
const { password: hashedPassword } = person;

console.log(password);
console.log(hashedPassword);


// Output:
// 12345
// undefined



//-------------------------------------------------------------------------------


// 4. Original Code: