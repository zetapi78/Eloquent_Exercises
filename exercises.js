var num = Number(prompt("Pick a number", "0"));

if (num < 10)
  alert("Small");
else if (num < 100)
  alert("Medium");
else
  alert("Large");

var number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

/* While Loops*/

var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

/* Breaking out a loop*/

for (var current = 20; ; current++) {
  if (current % 7 == 0)
    break;
}
console.log(current);

/* Updating Variables*/

for (var number = 0; number <= 12; number += 2)
  console.log(number);

/* Dispatching on a value with SWITCH*/

switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}

var sign = "#######";
var counter = 0;
while (counter < 7) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

//Excercise 1. Chapter 2 (SOLVED)

for (var sign= "#"; sign.lenght <= 7; sign += "#")
  console.log(sign);

//Excercise 2. Chapter 2 (SOLVED)
for (var toprint = 1; toprint <=100 ; toprint ++) {
  if (toprint % 3 == 0) 
  	console.log("Fizz");
  	else if (toprint % 5 == 0) 
  		console.log("Buzz");
  	else
  	  console.log(toprint);	
  	}

  	//Excercise 3. Chapter 2 (SOLVED! :)
var size = 8;
var sign ="";
for ( var row = 1; row <= size ; row ++) {
    for (var col = 1; col <= size; col ++) {
        var print = (col+row);
      if (print % 2 == 0) 
  	      sign += " ";
  	  else
     	   sign += "#";	
  	} sign += "\n";
  }console.log(sign);



// Chapter 3. Functions

var square = function(x) {
  return x * x;
};

var makeNoise = function() {
  console.log("Pling!");
};

var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};


//no entiendo esta funcion

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));


//power funtion wirth recursion
function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));


//recursive example

function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(24));


//Farm Code

function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width)
    string = "0" + string;
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 4) + " Cows");
  console.log(zeroPad(chickens, 4) + " Chickens");
  console.log(zeroPad(pigs, 4) + " Pigs");
}

printFarmInventory(7, 16, 3);


//Excercise Minimum (Solved)

function min(n1,n2) {
  if (n1<=n2)
    return n1;
  else  
    return n2;
}
console.log(min(0,-10));


//Excercise is Even (Solved)

function isEven(n1) {
    if (n1 == 0)
    return "true";
  else if (n1 == 1)
    return "false";
  else if (n1 < 0)
    return isEven (-n1);
  else
  return isEven (n1-2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//Excercise Bean Counting part 1.


function countBs(string){
  var total = 0;
  var largo = string.length;
   for (var count = 0; count < largo ; count ++)
    if (string.charAt(count) == "B")
       total++;
    return total;
} 
console.log(countBs("BBC"));

//excercise Bean part 2.

function countChar (string,charact){
    var total = 0;
  var largo = string.length;
   for (var count = 0; count < largo ; count ++)
    if (string.charAt(count) == charact)
       total++;
    return total;
}
function countBs(string){
  return countChar (string, "B");
}
console.log (countBs("BOBABEBI"));