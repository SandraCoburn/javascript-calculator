let person = {
  name: "Sean",
  age: 17,
  hobbies: ["piano", "drums"],
  greet: function () {
    alert("Hi there!");
  },
};
person.greet();
// To add properties to the object. Using the dot notation either override an object or add it it it's not there
person.isAdmin = true;
//to delete a property:
delete person.age;

console.log(person);
person.age = 18;

console.log(person);
