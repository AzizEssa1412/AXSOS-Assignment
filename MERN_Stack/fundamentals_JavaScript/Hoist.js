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


//-------------------------------------------------------------------------------


// 4. Original Code:
var food = 'chicken';
console.log(food);
eat();
function eat() {
  food = 'half-chicken';
  console.log(food);
  var food = 'gone';
}

// Hosting Explanation:
var food;
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food);
eat();

// Output:
// chicken
// half-chicken



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


//-------------------------------------------------------------------------------


// 4. Original Code:
var food = 'chicken';
console.log(food);
eat();
function eat() {
  food = 'half-chicken';
  console.log(food);
  var food = 'gone';
}

// Hosting Explanation:
var food;
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food);
eat();

// Output:
// chicken
// half-chicken


//-------------------------------------------------------------------------------


// 5. Original Code:
mean();
console.log(food);
var mean = function() {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
}
console.log(food);

// Hosting Explanation:
var mean;
mean();           
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);

// Output:
// TypeError: mean is not a function



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


//-------------------------------------------------------------------------------


// 4. Original Code:
var food = 'chicken';
console.log(food);
eat();
function eat() {
  food = 'half-chicken';
  console.log(food);
  var food = 'gone';
}

// Hosting Explanation:
var food;
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food);
eat();

// Output:
// chicken
// half-chicken


//-------------------------------------------------------------------------------


// 5. Original Code:
mean();
console.log(food);
var mean = function() {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
}
console.log(food);

// Hosting Explanation:
var mean;
mean();           
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);

// Output:
// TypeError: mean is not a function



//-------------------------------------------------------------------------------


// 6. Original Code:
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);

// Hosting Explanation:
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}

console.log(genre);
genre = "disco";
rewind();
console.log(genre);

// Output:
// undefined
// rock
// r&b
// disco




//-------------------------------------------------------------------------------


// 7. Original Code:
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);

// Hosting Explanation:
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";  
console.log(dojo);
learn();
console.log(dojo);

// Output:
// san jose
// seattle
// burbank
// san jose



//-------------------------------------------------------------------------------


// 8. Original Code:


