//you can create a set of any kind of data including arrays and objects. Sets have unique values. Sets come with its own methods you can't use array methods
const ids = new Set([1, 2, 4]);
ids.add(2); // if you add a value that is already there it won't add it because in sets values have to be unique
//you can't acces the index of a set but you can check if something is inside the set and it will return true or false with the 'has' method. more methods:clear,delete,entries, forEach, has, keys, values
console.log(ids.has(1));

console.log(ids.entries());

for (const entry of ids.entries()) {
  //entry is an array with the value twice
  console.log(entry);
}

const stringIds = new Set(["hi", "from", "set"]);
for (const entry of stringIds.entries()) {
  // this will give you a set of 3 arrays with the value entered twice
  console.log(entry[0]); //you will get the value of each entry only once
}
//If you want to get only one set of values you use the values method. this returns an iterable that only yields the set values once
for (const entry of stringIds.values()) {
  console.log(entry);
}

//if you want to delete a value you use the delete() method;
ids.delete(2);
console.log(ids);

//or you can chck first if the value exists because if it doesn't it wont throw an error it will just not do it.
if (stringIds.has("hi")) {
  stringIds.delete("hi");
}
console.log(stringIds);

//Working with maps. The map constructor has to be initialized with an array of arrays. Each array has a key value in
const person1 = { name: "sean" };
const person2 = { name: "jryan" };

const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);
//youc an set a key value:
personData.set(person2, [{ date: "two weeks", price: 20 }]);
console.log(personData);

//you can access data from maps with built in objects like get. It will get the value of the key in this case the key is person1
console.log(personData.get(person1));

for (const entry of personData.entries()) {
  console.log(entry);
}
// to get the exact key and value it can be written like this too:
for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

//if we only one the keys and not the values;
for (const key of personData.keys()) {
  console.log(key);
}
