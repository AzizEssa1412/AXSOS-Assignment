// 1. Original Code:
console.log(hello);
var hello = 'world';

// Hosting Explanation:
var hello;
console.log(hello);
hello = 'world';

// Output:
// undefined

//-------------------------------------------------------------------------------


// 2. Original Code:
var needle = 'haystack';
test();

function test() {
  var needle = 'magnet';
  console.log(needle);
}

// Hosting Explanation:
var needle;
function test() {
    var needle;
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();

// Output:
// magnet

//-------------------------------------------------------------------------------


// 3. Original Code:
var brendan = 'super cool';
function print() {
  brendan = 'only okay';
  console.log(brendan);
}
console.log(brendan);

// Hosting Explanation:
var brendan;
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);

// Output:
// super cool


