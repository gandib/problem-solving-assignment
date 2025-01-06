// 1. Task: Array Filtering and Mapping

// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

// Solution:
const persons = [
  { name: "John", age: 22, gender: "Male" },
  { name: "Marie", age: 20, gender: "Female" },
  { name: "Silvia", age: 32, gender: "Female" },
  { name: "David", age: 12, gender: "Male" },
  { name: "Jessie", age: 36, gender: "Female" },
];

const names = persons
  .filter((person) => person.gender !== "Female")
  .map((person) => person.name);
console.log(names);

// 2. Task: Object Manipulation

// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

// Solution:
const books = [
  { title: "Gitanjoli", author: "Rabindranath Tagore", year: 1913 },
  { title: "Putul Nacher Itikotha", author: "Manik Banerjee", year: 1956 },
  { title: "Ekusher Rongomonche", author: "Gandib Gyanangkur", year: 2018 },
  { title: "Dew Khele Tori Dule", author: "Surjasen Roy", year: 2016 },
];

const titles = books.map((book) => book.title);
console.log(titles);

// 3. Task: Function Composition

// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

// Solution:
const square = (number) => {
  return number * number;
};
const double = (number) => {
  return number + number;
};
const add = (number) => {
  return number + 5;
};

const allInOne = (number) => {
  const squared = square(number);
  const doubled = double(squared);
  return add(doubled);
};
console.log(allInOne(3));

// 4. Task: Sorting Objects

// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

// Solution:
const cars = [
  { make: "Toyota", model: "Toyota Corrola", year: 1998 },
  { make: "Jeep", model: "Jeep Avenger Altitude SUV 2024", year: 2024 },
  { make: "Tesla", model: "Tesla Solar", year: 2025 },
  { make: "Honda", model: "Honda Accord Coupe 2008", year: 2023 },
];

const sortedCars = [...cars].sort((a, b) => a.year - b.year);
console.log(sortedCars);

// 5. Task: Find and Modify

// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

// Solution:
const peoples = [
  { name: "John", age: 22, gender: "Male" },
  { name: "Marie", age: 20, gender: "Female" },
  { name: "Silvia", age: 32, gender: "Female" },
  { name: "David", age: 12, gender: "Male" },
  { name: "Jessie", age: 36, gender: "Female" },
];

const updatePeople = (name) => {
  const person = peoples.find((person) => person.name === name);
  if (person) {
    person.age = 30;
  } else {
    console.log(`${name} not found!`);
  }
};
updatePeople("John");
console.log(peoples);
