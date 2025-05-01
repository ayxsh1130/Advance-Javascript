// a function passed as an argument to another function
// a function that is executed after another function has finished executing

// function doSomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("Hi");
// }
// doSomething(sayHi);

// function judge(grade){
//     switch(true){
//         case grade == "A":
//             console.log("You got an", grade, ": amazing!");
//             break;
//         case grade == "B":
//             console.log("You got an", grade, ": well done!");
//             break;
//         case grade == "C":
//             console.log("You got an", grade, ": alright!");
//             break;
//         case grade == "D":
//             console.log("You got an", grade, ": hmmm....!");
//             break;
//         default:
//             console.log("You got an", grade, ": try harder next time!");
//             break;

//     }
// }
// function getGrade(score, callback){
//     let grade;
//     if(score >= 90){
//         grade = "A";
//     }else if(score >= 80){
//         grade = "B";
//     }else if(score >= 70){
//         grade = "C";
//     }else if(score >= 60){
//         grade = "D";
//     }else{
//         grade = "F";
//     }
//     callback(grade);
// }
// getGrade(85, judge);

//                                        *************promises*************

// let promise = new Promise(function(resolve, reject){
//     let x = 8;
//     if (x > 10){
//         resolve(x);
//     }
//     else{
//         reject("x is less than 10");
//     }
// }
// );
// promise.then(
//     function(value){
//     console.log("Success:", value);
// },
// function(error){
//     console.log("Error:", error);
// });

// const promise = new Promise((resolve, reject) =>{
//     // resolve("Success");
//     reject("Error");
// })
// .then(value => {
//     console.log(value);
//     return "we";
// })
// .then(value => {
//     console.log(value);
//     return "can";
// })
// .then(value => {
//     console.log(value);
//     return "chain";
// }).then(value => {
//     console.log(value);
//     return "promises";
// })
// .then(value => {
//     console.log(value);
// })
// .catch(value => {
//     console.log(value);
// }
// )


//                                             **************async/await************

// function saySomething(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Hello");
//         }, 2000);
//     });
// }
// async function talk(x){
//     const words =  await saySomething(x);
//     console.log(words);
// }

// talk(2);
// talk(4);
// talk(6);
// talk(8);
// talk(10);
