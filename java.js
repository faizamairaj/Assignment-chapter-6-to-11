                 // Chapter 6 to 8

// Q:1 Write a program to take a number in a variable, 
// do the required arithmetic to display the following result in your browser:

// let a = 10;

// document.write ("The value of a is: " + a + "<br><br>");
// document.write (",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,<br><br>");
// // pre-increment
// document.write ("The value of ++a is: " + ++a + "<br>");
// document.write ("Now the value of a is: " + a + "<br><br>");
// // post increment
// document.write ("The  valueof a++ is: " + a++ + "<br>");
// document.write ("Npw the value of a is: " + a + "<br><br>");
// // pre- decrement
// document.write ("The value of --a is: " + --a + "<br>");
// document.write ("Now the value of a is: " + a + "<br><br>");
// // post-decrement
// document.write ("The value of a-- is: " + a-- +"<br>");
// document.write ("Now the value of a is: " + a + "<br>");

// Q:2 What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// document.write("a is " + '??' + "<br>");
// document.write("b is " + '??' + "<br>");
// document.write("result is " + '??' + "<br>");

// Q:3 Write a program that takes input a name from user & greet the user.
// let username = "Jannat";
// document.write(`hello! ${username} how are you...`);

// Q:4 is not printing ?

// Q:5 Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.

// let number = prompt("Please enter a number for the multiplication table:", 5);
// number = parseInt(number) || 5;
// for (let i = 1; i <= 10; i++) {
//  document.write(`${number} x ${i} = ${number * i}<br>`);
// }

// Q:6 Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table).

// a) Take subject names
// document.write("<h3>Subject Total Marks Obtained Marks Percentage</h3>");
// let English = "English <br>";
// let Math = "Math <br>"; 
// let Urdu = "Urdu <br>"; 

// let totalMarksPerSubject = 100;
// let marks1 = 54;

// let marks2 = 54; 
// let marks3 = 48; 

// let totalMarks = totalMarksPerSubject * 3; 
// let totalObtainedMarks = marks1 + marks2 + marks3;
// let percentage = (totalObtainedMarks / totalMarks) * 100;

// // console.log("Marks and Percentage Calculation");

// document.write("Subject: " + English + " | Total Marks: " + totalMarksPerSubject + " | Obtained Marks: " + marks1 + "<br>");
// document.write("Subject: " + Urdu+ " | Total Marks: " + totalMarksPerSubject + " | Obtained Marks: " + marks2 + "<br>");
// document.write("Subject: " + Math + " | Total Marks: " + totalMarksPerSubject + " | Obtained Marks: " + marks3 + "<br> <br>");

// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Total Obtained Marks: " + totalObtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "%"+ "<br>");

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                     // Chapter 9 to 11

//Q:1 Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 
                
// let city = prompt("Enter your city name");
// if (city === "karachi") {
//     document.write("Welcome to city of lights ");
// } else {
//     document.write("Welcome to " + city);
// }

// Q:2 Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning  Ma’am.

// let gender = prompt ("Enter your gender please!");
// if (gender === "male") {
//     document.write ("Good Morning Sir.🤵");
// } else {
//     document.write ("Good Morning Ma’am.🧍‍♀️");
// }

// Q:3 Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:
// Signal color Message
// Red      Must Stop
// Yellow   Ready to move
// Green    Move now

// The answer to this is in the HTML file.

// Q:4Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”.

// let remainingFuel = prompt ("Enter the remaining fuel in your car (in litres):");
// if (remainingFuel < 0.25) {
//    document.write ("Please refill the fuel in your car.");
// } else {
//     document.write ("your fuel level is sufficient.");
// }

// Q:5 Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }


// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

// if (c === 13){
// alert("condition 2 is true");
// }

// if (++c < 14){
// alert("condition 3 is true");
// }

// if(c === 14){
// alert("condition 4 is true");
// }

// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// e. if (true){
// alert("True");
// }

// if (false){
// alert("False");
// }

// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }


// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// if (true) {
//     alert("True");
//   }
//   if (false) {
//     alert("False");
//   }

//   if ("car" < "cat") {
//     alert("car is smaller than cat");
//   }
   
// // Q:7 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.

// let secretNumber = Math.floor(Math.random() * 10)+1;
// let userGuess = parseInt(prompt ("guess the secret number between 1 to 10:"));
// if (userGuess === secretNumber) {
//   alert("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//     alert("close enough to the correct answer");
// } else {
//     alert("Sorry, try again the secret number was " + secretNumber);
// }

// Q:8 Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number is divisible by 3.

// let number = prompt("Enter a number to check if its divisible by 3:");
// if (number % 3 === 0) {
//     alert(number + " is divisible by 3.");
// } else {
//     alert(number + " is not divisible by 3.");
// }

// Q:9 Write a program that checks whether the given input is an even number or an odd number.

// let number = prompt ("Enter a number to check if its even number or odd:");
// if (number % 2 === 0) {
//     alert (number + " is an even number")
// } else {
//     alert(number + " is an odd number");
// }

// Q:10 Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is  too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// let temperature = prompt ("Enter the temperature");
// if (temperature > 40) {
//    alert("“It is  too hot outside.")
// } else if (temperature > 30) {
//     alert ("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert ("Today’s Weather is cool.");
// } else if (temperature > 10) {
//   alert ("OMG! Today’s weather is so Cool.");
// } else {
//     alert("It's very hot today.");
// }

// Q:11 Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// let firstNumber = parseFloat(prompt("Enter a first number"));
// let secondNumber = parseFloat(prompt("Enter a second number"));
// let operation = prompt("Enter the operation you want to perform (+, -, *, /, %)");

// let result;

// if (operation === "+") {
//   result = firstNumber + secondNumber;
// } else if (operation === "-") {
//   result = firstNumber - secondNumber;
// } else if (operation === "*") {
//   result = firstNumber * secondNumber;
// } else if (operation === "/") {
//   result = firstNumber / secondNumber;
// } else if (operation === "%") {
//   result = firstNumber % secondNumber;
// } else {
//   result = "Invalid operation.";
// }

// alert("The result is: " + result);

