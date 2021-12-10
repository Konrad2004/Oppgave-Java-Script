

// Forskjellige comparison operators <, >, <=, >=, ===, !==, &&, ||

// terminary operators
let isNightTime = true;

if (isNightTime) {
  console.log("Turn on the lights!");
} else {
  console.log("Turn off the lights!");
}

let favoritePhrase = "no way";

favoritePhrase === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");

// Sette default parameters

let tool;

tool = "marker";

let writingUtensil = tool || "pen";

console.log(`The ${writingUtensil} is mightier than the sword.`);

//Else if statements
let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}

// Switch statements
let athleteFinalPosition = "summer";

switch (athleteFinalPosition) {
  case "spring":
    console.log("It's spring! The trees are budding!");
    break;
  case "winter":
    console.log("It's winter! Everything is covered in snow.");
    break;
  case "fall":
    console.log("It's fall! Leaves are falling!");
    break;
  case "summer":
    console.log("It's sunny and warm because it's summer!");
    break;
  default:
    console.log("Invalid season.");
    break;
}

/* An if statement checks a condition and will execute a task if that condition evaluates to true.
if...else statements make binary decisions and execute different code blocks based on a provided condition.
We can add more conditions using else if statements.
Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
The logical operator ||, or “or”, checks if either provided expression is truthy.
The bang operator, !, switches the truthiness and falsiness of a value.
The ternary operator is shorthand to simplify concise if...else statements.
A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.
 */
