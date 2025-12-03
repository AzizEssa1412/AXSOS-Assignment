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
