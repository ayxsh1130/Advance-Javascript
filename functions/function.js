//                                                                Arrow Functions

// let doingArrowFunction = (x) => console.log(x);
// doingArrowFunction("Hawk");

// let addTwoNumbers = (x, y) => console.log(x + y);
// addTwoNumbers(5, 10);

// let sayHi = () => console.log("Hi");
// sayHi();

// const arr = ["squirrel", "hawk", "bear"];
// arr.forEach(e => console.log(e));


//                                                                Spread Operator

// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];
// console.log(message);

// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", spread, "and", "very", "powerful"];
// console.log(message);

// function addTwoNumbers(x,y) {
//     console.log(x+y);
// }
// let arr = [5, 10];
// addTwoNumbers(...arr);

// function addFourNumbers(x,y,z,a) {
//     console.log(x+y+z+a);
// }
// let arr = [5,9];
// let arr2 = [6,7];
// addFourNumbers(...arr, ...arr2)

//                                                                Rest Operator/parameters

// function someFunction(parameter1, parameter2) {
//     console.log(parameter1, parameter2);
// }
// someFunction("Hawk", "Pink","No one");

// function someFunction(parameter1, ...parameter2) {
//     console.log(parameter1, parameter2);
// }
// someFunction("No one", "Pink","Hawk");


//                                                                Returning function values


// function addTwoNumbers(x, y) {
//     return x + y;
// }
// let result = addTwoNumbers(5, 10);
// console.log(result);\

// let resultsArr= [];
// for (let i = 0; i < 10; i++) {
//     let result = addTwoNumbers(i, 2*i);
//     resultsArr.push(result);
// }
// console.log(resultsArr);

// let addTwoNumbers = (x, y) => x + y;
// let result = addTwoNumbers(12, 15);
// console.log(result);

// let addTwoNumbers = (x, y) => {
//     console.log("Adding...");
//     return x + y;
// }
// console.log(addTwoNumbers(5, 10));


//                                                                Variable scope in functions

//                       1. Local variable in function

// function testAvailability(x) {
//     console.log("Available here:",x);
// }
// testAvailability("Hi!");
// console.log("Not available here:",x);

// function testAvailability() {
//     let y = "Local variable";
//     console.log("Available here:",y);
// }
// testAvailability();
// console.log("Not available here:",y);

// function testAvailability() {
//     let y= "I'll return";
//     console.log("Available here:",y);
//     return y;
// }
// let z = testAvailability();

// console.log("Outside function:",z);
// console.log("Not available here:",y);

// function doingStuff(){
//     if(true){
//         var x = "local";
//     }
//     console.log(x);
// }
// doingStuff();

// function doingStuff(){
//     if(true){
//         console.log(x);
//         var x = "local";
//     }
// }
// doingStuff();


//const space













//                        2. Global variable in function

// let globalVar = "Accessible everywhere";
// console.log("Outside function:", globalVar);

// function creatingNewScope() {
//     console.log("Access to global vars inside function:", globalVar);
// }
// creatingNewScope("some parameter");
// console.log("still available:", globalVar);

// let x = "global";
// function doingStuff(){
//     let x = "local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);

// let x = "global";
// function doingStuff(x){
//     console.log(x);
// }
// doingStuff("param");

// function confuseReader(){
//     x="GUess my scope...";
//     console.log("inside function:",x);
// }
// confuseReader();
// console.log("outside function:",x);