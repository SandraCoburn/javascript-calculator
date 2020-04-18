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
hobbies.splice(0, 0, "Good food", "fishing"); //first argument it's the start index and then the number you want to delete, then add any other elements you want to add
console.log(hobbies);

hobbies.splice(0, 1); //will strt looking at 0 index and delete one element. hobbies.splice(0) will delete all items. hobbies.splice(1) will delete all elements starting with index1
const removedElements = hobbies.splice(0, 1); //splice returns the elements removed and get stored in removedElements
hobbies.splice(-1, 1); // will remove the last one in the array. It will start looking from end to left

//The slice method will copy an array. It will return a new array with all elements from array copied
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedReults = testResults.slice(0, 2); //It's also used to select ranges from an array with a start and an end number as arguments. It will give a new array starting at 0 all the way to element with index 2 but it will not include element 2. testResults.slice(-1,-1) will start from the end to left
console.log(storedReults);
console.log(testResults.slice()); //will create a copy of testResults

//Adding arrays to arrays with concat
const concatArray = testResults.concat([3.99, 2]); //it returns a brand new array with the first one and second one combined

//retrieving indexes with indesOf()/&lastIndexOf()
console.log(testResults.indexOf(1.5)); // will look for in the array and return the index 1.5 is stored in. will console.log 2
console.log(testResults.lastIndexOf(1.5)); //it will start looking from the end of array to the left. it will console.log 4

//finding an object in an array with find() methos. indexOf() will not work in an array of objects
const personData = [{ name: "John" }, { name: "Sean" }];
const sean = personData.find((person, index, persons) => {
  return person.name === "Sean";
}); //find() takes a function as an argument. that function accepts 3 arguments: an objec, index of the element and the whole array. It will return a boolen true or false
sean.name = "Jackie";
console.log(sean, personData);

//To find the index of an object in an array.
const johnIndex = personData.findIndex((person, index, persons) => {
  return person.name === "John";
});
console.log(johnIndex);

// Includes method
console.log(testResults.includes(10.99)); //it will return a boolean of true or false if the element is not found in the array

//ForEach() method will take up to 3 arguments: element, index, arrayVariable for full array
const prices = [10.99, 5.99, 3, 99, 6.59];
const tax = 0.19;
const taxAdjustedPrice = [];

prices.forEach((price, inx, prices) => {
  const priceObj = { index: inx, taxAdjustedPrice: price * (1 + tax) }; //you can create objects with index number
  taxAdjustedPrice.push(priceObj);
});
//will give same result as:
// for (const price of prices) [taxAdjustedPrice.push(price * (1 + tax))];
console.log(taxAdjustedPrice);

//Map() will give a new array with the elements that meet the criteria, it has to have a return. It won't change the original array
const prices = [10.99, 5.99, 3, 99, 6.59];
const tax = 0.19;
// const taxAdjustedPrice = [];

const taxAdjustedPrices = prices.map((price, inx, prices) => {
  const priceObj = { index: inx, taxAdjustedPrice: price * (1 + tax) }; //you can create objects with index number
  return priceObj;
});

//sort() method by default convert everything into a string. It takes to arguments: the two elements to be compared. If a is greater than b.
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(sortedPrices.reverse()); // you can't pass any arguments, it will just reverse the sorted array

//filter() method will return a brand new array without changing the origial array. It takes in 3 arguments, the element, index and full array. It returns boolean values
const filteredArray = prices.filter((price, index, prices) => {
  return prices > 6;
});
console.log(filteredArray);
