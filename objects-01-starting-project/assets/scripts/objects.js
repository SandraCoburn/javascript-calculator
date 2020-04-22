const addMovieBtn = document.getElementById("add-movie-btn");
const searcBrn = document.getElementById("search-btn");

//Create an array to hold the movie title from form
const movies = [];

//to output the movies stored in the array
const renderMovies = () => {
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = "";
  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  //this will create a new list element li to store every new movie we input
  movies.forEach((movie) => {
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

  //add some validation to see if the values of the tile and other fields are empty are empty
  if (
    title.trim() === "" ||
    (extraName.trim() === "") | (extraValue.trim() === "")
  ) {
    return;
  }

  //create an object with dinamic data. Setting the value is optional Javascript will add the value like this: title: title
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue, //extraName is a variable that will hold the extraValue value
    },
    id: Math.random(),
  };
  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
};

addMovieBtn.addEventListener("click", addMovieHandler);

// //use of brackets to dynamicaly add a property to an objec
// const userChosenKeyName = "level"

// let person = {
//   name: "Sean",
//   'last-name': "Coburn",
//   age: 17,
//   hobbies: ["piano", "drums"],
//   greet: function () {
//     alert("Hi there!");
//   },
// };
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
