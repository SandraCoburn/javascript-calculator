const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

//Create an array to hold the movie title from form
const movies = [];

//to output the movies stored in the array
const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = "";
  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  //If the filt is falsy, empty then show all movies. If there is a string in filter, get all movies and filter by movie, then check if the movie info title includes what is in the filter value:
  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  //this will create a new list element li to store every new movie we input
  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    // movieEl.textContent = movie.info.title;
    let text = movie.info.title + " - ";
    for (const key in movie.info) {
      if (key !== "title") {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }

    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};
//this function will take care of adding a movie from the form
const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  //add some validation to see if the values of the tile and other fields are empty
  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  //create an object with dinamic data. Setting the value is optional Javascript will add the value like this: title: title
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue, //extraName is a variable that will hold the extraValue value
    },
    id: Math.random().toString(),
  };
  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);

// //use of brackets to dynamicaly add a property to an objec
// const userChosenKeyName = "level"

let person = {
  name: "Sean",
  "last-name": "Coburn",
  age: 17,
  hobbies: ["piano", "drums"],
  greet: function () {
    alert("Hi there!");
  },
};

let personSis = {
  name: "Jackie",
  "last-name": "Coburn",
  age: 16,
  hobbies: ["piano", "drama"],
  greet: function () {
    alert("Hi there!");
  },
};
console.log(personSis);
// person.greet();
// // To add properties to the object. Using the dot notation either override an object or add it it it's not there
// person.isAdmin = true;
// //to delete a property:
// delete person.age; //or you can just reset the value: person.age = null

// console.log(person);
// person.age = 18;

// console.log(person);

// const keyName = 'last name'
// //bracket notation
// console.log(person[keyName])
// console.log(person['last name'])

//Object.assign() will assign everything in object person to a new array. This can be done with an empty object or another array(it will override the other array)
const person2 = Object.assign(personSis, person);
console.log(person2);
console.log(personSis);
