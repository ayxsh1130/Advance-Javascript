//create a map
// const fruits = new Map([
//     ['apple', 1],
//     ['banana', 2],
//     ['orange', 3]
// ]); 
// console.log(fruits);

//                                        *************set() method***********

// const fruits = new Map([
//     fruits.set('apple', 1),
//     fruits.set('banana', 2),
//     fruits.set('orange', 3),
// ]);

//                                        *************get() method***********

// fruits.get('apple');

// console.log(fruits.size);


// fruits.delete('banana');
// fruits.clear();
// fruits.has('apple');

// fruits.delete('banana');
// fruits.has('banana');

// let text = "";
// fruits.forEach(function(value, key) {
//     text += key + " = " + value + "\n";
// }
// );
// console.log(text);

// let text = "";
// for(const x of fruits.entries()){
//     text += x + "\n";
// }
// console.log(text);

// let text = "";
// for(const x of fruits.keys()){
//     text += x + "\n";
// }
// console.log(text);

// let text = "";
// for(const x of fruits.values()){
//     text += x + "\n";
// }
// console.log(text);

// let total = 0;
// for (const x of fruits.values()) {
//     total += x;
// }   

//                                        *************object as keys***********

// const apple = { name: "apple" };
// const banana = { name: "banana" };      
// const orange = { name: "orange" };
// const fruits = new Map;
// fruits.set(apple, 1);
// fruits.set(banana, 2);          
// fruits.set(orange, 3);
// fruits.get("apple"); //returns undefined

//                                       *************map.groupBy()***********

// const fruits = [
//     { name: "apple", quantity: 1 },
//     { name: "banana", quantity: 2 },
//     { name: "orange", quantity: 3 },
//     { name: "kiwi", quantity: 4 },
// ];
// function myCallback(quantity) {
//     return quantity > 2? "ok" : "low";
// }
// const result = Map.groupBy(fruits, myCallback);
// console.log(result);



//                                     ************JavaScript Destructuring************

// let{firstName, LastName}= person;

// let[firstName, LastName]= person;

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
// }
// let { firstName, lastName } = person;
// console.log(firstName); // John
// console.log(lastName); // Doe

// destructing is not destructive
// destructuring does not change the original object



//                                 ***********object default values***********

// const person = {
//     firstName: "Mays",
//     lastName: "Alreem",
//     age: 20,
// };
// let{ firstName, lastName, country = "Saudi Arabia" } = person;
// console.log(country);

// const person = {
//     firstName: "Mays",
//     lastName: "Alreem",
//     age: 20,
// };
// let { lastName: name} = person;
// console.log(name); // Alreem

// let name = "Mays";
// let[a1, a2, a3, a4] = name;
// console.log(a1); // M
// console.log(a2); // a   
// console.log(a3); // y
// console.log(a4); // s
// console.log(a1 + a2 + a3 + a4); // Mays


// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// let [fruit1, fruit2]= fruits;
// console.log(fruit1); // Banana
// console.log(fruit2); // Apple
// let {[0]: fruit1, [1]: fruit2}= fruits;

//                                              ***************rest property***************

// let [fruit1, ...rest]= fruits;
// console.log(fruit1); // Banana
// console.log(rest); // [ 'Apple', 'Orange', 'Mango' ]


//                                               **************swapping variables***************\

// let firstName = "Mays";
// let lastName = "Alreem";    
// [firstName, lastName] = [lastName, firstName];
// console.log(firstName); // Alreem
// console.log(lastName); // Mays

//                                                *************exponential operator***************

// let x = 2;
// let z = x** 3;
// console.log(z); // 8

// let x= 2;
// let z = Math.pow(x, 3);
// console.log(z); // 8

//                                              *************exponentiation assignment****************

// let x = 5;
// x **= 2;
// console.log(x); // 25





