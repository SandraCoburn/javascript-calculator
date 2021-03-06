//How to create arrays
const numbers = [1, 2, 3];

const moreNumbers = new Array("hi", "welcom"); //creates a new array
const emptyArray = new Array(5); //it will create an empty array of 5 ellements

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

// const arrayLike = Array.from(1, 2, 3); //it creates an array like array
const anotherArrayLikeArray = Array.from("hello");
console.log(anotherArrayLikeArray); //it will return ["h", "e","l","l","o"]

const listItems = document.querySelectorAll("li");
const arrayListItems = Array.from(listItems); //it will create a real array from a nodeList
console.log(arrayListItems);

//Multi demensional arrays

const personalData = [30, "Max", { moreDetails: [] }];

const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
  [2, 3],
];

for (const data of analyticsData) {
  console.log("I'm first for loop", data);
  for (const dataPoint of data) {
    console.log("I'm second for loop", dataPoint);
  }
}

//Manipulating arrays:
const hobbies = ["cooking", "sports"];
hobbies.push("Reading"); //adds element at the end of array
console.log(hobbies);
hobbies.unshift("coding"); //adds element at the first of aray
hobbies.pop(); //will remove the last element
const poppedValue = hobbies.pop(); //value will be stored in the variable to be  used later
hobbies.shift(); //will remove the element at the beggining of the array
console.log(hobbies);

//To manipulate items one at a time by index
hobbies[1] = "Coding"; //this will replace the element on index 1

console.log(hobbies);

//The splice method, it allows to add elements in between elements. It takes at least 2 arguments but it can take more (start, howManyTodelete, add)
// hobbies.splice(0, 0, "Good food", "fishing"); //first argument it's the start index and then the number you want to delete, then add any other elements you want to add
// console.log(hobbies);

// hobbies.splice(0, 1); //will strt looking at 0 index and delete one element. hobbies.splice(0) will delete all items. hobbies.splice(1) will delete all elements starting with index1
// const removedElements = hobbies.splice(0, 1); //splice returns the elements removed and get stored in removedElements
// hobbies.splice(-1, 1); // will remove the last one in the array. It will start looking from end to left

// //The slice method will copy an array. It will return a new array with all elements from array copied
// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedReults = testResults.slice(0, 2); //It's also used to select ranges from an array with a start and an end number as arguments. It will give a new array starting at 0 all the way to element with index 2 but it will not include element 2. testResults.slice(-1,-1) will start from the end to left
// console.log(storedReults);
// console.log(testResults.slice()); //will create a copy of testResults

// //Adding arrays to arrays with concat
// const concatArray = testResults.concat([3.99, 2]); //it returns a brand new array with the first one and second one combined

// //retrieving indexes with indesOf()/&lastIndexOf()
// console.log(testResults.indexOf(1.5)); // will look for in the array and return the index 1.5 is stored in. will console.log 2
// console.log(testResults.lastIndexOf(1.5)); //it will start looking from the end of array to the left. it will console.log 4

// //finding an object in an array with find() methos. indexOf() will not work in an array of objects
// const personData = [{ name: "John" }, { name: "Sean" }];
// const sean = personData.find((person, index, persons) => {
//   return person.name === "Sean";
// }); //find() takes a function as an argument. that function accepts 3 arguments: an objec, index of the element and the whole array. It will return a boolen true or false
// sean.name = "Jackie";
// console.log(sean, personData);

// //To find the index of an object in an array.
// const johnIndex = personData.findIndex((person, index, persons) => {
//   return person.name === "John";
// });
// console.log(johnIndex);

// // Includes method
// console.log(testResults.includes(10.99)); //it will return a boolean of true or false if the element is not found in the array

// //ForEach() method will take up to 3 arguments: element, index, arrayVariable for full array
const prices = [10.99, 5.99, 3, 99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrice = [];

// prices.forEach((price, inx, prices) => {
//   const priceObj = { index: inx, taxAdjustedPrice: price * (1 + tax) }; //you can create objects with index number
//   taxAdjustedPrice.push(priceObj);
// });
// //will give same result as:
// // for (const price of prices) [taxAdjustedPrice.push(price * (1 + tax))];
// console.log(taxAdjustedPrice);

// //Map() will give a new array with the elements that meet the criteria, it has to have a return. It won't change the original array
// const prices = [10.99, 5.99, 3, 99, 6.59];
// const tax = 0.19;
// // const taxAdjustedPrice = [];

// const taxAdjustedPrices = prices.map((price, inx, prices) => {
//   const priceObj = { index: inx, taxAdjustedPrice: price * (1 + tax) }; //you can create objects with index number
//   return priceObj;
// });

// //sort() method by default convert everything into a string. It takes to arguments: the two elements to be compared. If a is greater than b.
// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedPrices.reverse()); // you can't pass any arguments, it will just reverse the sorted array

// //filter() method will return a brand new array without changing the origial array. It takes in 3 arguments, the element, index and full array. It returns boolean values
// const filteredArray = prices.filter((price, index, prices) => {
//   return prices > 6;
// });
// console.log(filteredArray);

// //reduce() method will take in up to 4 arguments: previous value, current value, index, whole array and another argument at the end which is the initial value
// // const sum = 0;
// // prices.forEach(price => {
// //     sum += price
// // })
// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//   return prevValue + curValue;
// }, 0);
// console.log(sum);
// //methods can be chained in JavaScript
// const originalArray = [{ price: 10.0 }, { price: 5.99 }, { price: 29.99 }];
// const sum = originalArray
//   .map((obj) => obj.price)
//   .reduce((sumVal, curVal) => sumVal + curVal, 0);

// Arrays and strings - split() will separate data and put it in an array of multiple segments. It can take another argument to give it the number of elements you want to have.
const data = "new yok; 10.99; 2000";
const trnsformedData = data.split(";");
//to change the string into real numbers:
trnsformedData[1] = +trnsformedData[1];
console.log(trnsformedData);

//and join() methods will convert everything into a string. By default it separates the values with a coma. If you want them together without a string you add '' as argument. if you want space in between you add " ".
const nameFragments = ["max", "john"];
const name = nameFragments.join("");
console.log(name);

//The spread operator(...) it will pull all the elements of an array and copy all the values of the original array
const copiedNameFragments = [...nameFragments];

nameFragments.push("Jackie");
console.log(nameFragments, copiedNameFragments);

//global Math object will return the smallest value. It doesn't take arrays only numbers. But you can use the spread operator to get the values from the array
console.log(Math.min(2, 1, 10, 9));
console.log(Math.min(...prices));

const persons = [
  { name: "john", age: 12 },
  { name: "jackie", age: 16 },
  { name: "sean", age: 17 },
];
const copiedPersons = [...persons];
persons.push({ name: "jocy", age: 30 });
persons[0].age = 31;
console.log(persons, copiedPersons);

//If we want to keep a copy of the original array(clone) and so if we make changes to original array our copy stays the same, we need to add a map function to get a new place in memory for the new array:
const copiedPersonsArray = [
  ...persons.map((person) => ({ name: person.name, age: person.age })),
];
//or const copiedPersonsArray = persons.map(person => ({name:person.name, age: person.age}))
console.log(copiedPersonsArray);

//array destructoring is used when you want to access individual values
const nameData = ["jocy", "giovanni", "sean", "jackie", "jryan"];
const firstName = nameData[0]; // you can add the value to a varible or:

// const [firstSibling, secondSibling] = nameData;
// console.log(firstSibling, secondSibling);

//if you want to get the first two elements and then the rest of the values, you use the spread operator
const [one, two, ...allOthers] = nameData;
console.log(one, two, allOthers);
