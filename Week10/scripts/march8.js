// Our own objects in JavaScript!

// Objects in JavaScript...
//  let any= []; Arrays..

let obj = {}; //An empty object

let person = { name: "Alan Smith", age: 20, email: "alan@gmail.com" };

// console.log(person.name); // dot notation...
// console.log(person.age); // dot notation

// console.log(person["email"]); //array notation..

// var campus = {
//   name: "KeyinStJohn's",
//   lat: 43.7714,
//   lng: -79.4988,
// };

// console.log(campus["lat"]);

// var menu = {
//   hotel: "Garry BLues",
//   breakfast: ["eggs", "toast", "banana", "coffee"],
//   lunch: ["salad", "chicken", "apple", "milk"],
//   dinner: ["salmon", "rice", "green beans"],
// };

// console.log(menu.hotel);

// Position of Keyin College on Map
//  43.6532; -79.3545;

// by using simple variables...
// var lat = 43.6532;
// var lng = -79.3545;

// // by using an array...
// var position = [43.6532, -79.3545];

// // by using object...

// var pos = { lat: 43.6545, lng: -79.3545 };

// console.log(pos.lat);

/* 

//  [0, 1, 2]

R C
0,0  0,1  0,2
1,0  1,1  1,2
2,0  2,1  2,2


*/

// var campuses = [
//   [43.123, -89.333],
//   [46.456, -69.2222],
//   [42.3332, -90.5555],
// ];

// for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < 2; j++) {
//     console.log(campuses[i][j]);
//   }
// }

// VERY IMPORTANT HERE...ARRAY OF OBJECTS..
// var campuses = [
//   { lat: 43.5333, lng: -29.5433 },
//   { lat: 41.5333, lng: -39.5433 },
//   { lat: 42.5333, lng: -89.5433 },
//   { lat: 45.5333, lng: -90.5433 },
//   { lat: 48.5333, lng: -79.5433 },
// ];

// var campuses = [
//   { lat: 43.5333, lng: -29.5433 },
//   { lat: 41.5333, lng: -39.5433 },
//   { lat: 42.5333, lng: -89.5433 },
//   { lat: 45.5333, lng: -90.5433 },
//   { lat: 48.5333, lng: -79.5433 },
// ];

// console.log(campuses[1]);

// when we are reading from object.. this is called get operation...getters
// when we are setting a value in object.. this is called set opeation... setters..

// console.log(user.email);
// user.firstName = "Bob";
// user.loggedIn = true;
// console.log(user);

// var user = {
//   firstName: "Alex",
//   lastName: "Smith",
//   email: "alex@gmail.com",
//   loggedIn: false,
//   hobbies: ["reading", "sports", "cycling"],
//   prefs: { color: "Red", mode: "Audi" },
//   logIn: function () {
//     this.loggedIn = true;
//   },
//   logOut: function () {
//     this.loggedIn = false;
//   },
// };

// // An object can contain ANY type of fields inside itself

// console.log(user);
// // user.logIn();
// // console.log(user);
// // user.logOut();
// // console.log(user);

// var user1 = {
//   firstName: "Bob",
//   lastName: "Smith",
//   email: "bob@gmail.com",
//   loggedIn: true,
//   hobbies: ["something", "social", "cycling"],
//   prefs: { color: "Yellow", mode: "Vovo" },
//   logIn: function () {
//     this.loggedIn = true;
//   },
//   logOut: function () {
//     this.loggedIn = false;
//   },
// };

// console.log(user1);

// Constructor Function. ..
// The constructor function starts with a capital letter...

// function User(f, l, e) {
//   this.firstName = f;
//   this.lastName = l;
//   this.email = e;
//   this.loggedIn = true;
//   this.hobbies = ["something", "social", "cycling"];
//   this.prefs = { color: "Yellow", mode: "Vovo" };
//   this.logIn = function () {
//     this.loggedIn = true;
//   };
//   this.logOut = function () {
//     this.loggedIn = false;
//   };
// }

// var user1 = new User("Alan", "Smith", "alan@gmail.com");
// var user2 = new User("Christina", "Lee", "chris@gmail.com");
// console.log(user2);
// user2.prefs = { color: "Red", mode: "Audi" };
// console.log(user2);
// constructor function
// function User(f, l, e) {
//   this.firstName = f;
//   this.lastName = l;
//   this.email = e;
//   this.loggedIn = true;
//   this.hobbies = ["something", "social", "cycling"];
// }

// User.prototype.anything = "hello";
// User.prototype.prefs = { color: "Yellow", mode: "Vovo" };
// User.prototype.logIn = function () {
//   this.loggedIn = true;
// };

// User.prototype.logOut = function () {
//   this.loggedIn = false;
// };

// var user1 = new User("Alan", "Smith", "alan@gmail.com");
// console.log(user1.prefs);
// console.log(user1.anything);
// user1.logOut();
// console.log(user1);
// var user2 = new User("Bob", "Smith", "bob@gmail.com");
// var user1000 = new User("xxxtx", "xxttx", "xxxtt@gmail.com");
// user1.logOut(); // its very less likely or occasional that we may call logout and login functions...

// JavaScript defines something called "Prototype".. .Prototypal Inheritance.... where we define a prototype and store all common features there.. and they are not copied with every object creation....

// March 9 lecture starts here....

// let users = [{first...},{sfdsf},{sfsdfdss}];

let users = [
  {
    firstName: "Alex",
    lastName: "Smith",
    email: "alex@gmail.com",
    loggedIn: false,
    hobbies: ["reading", "sports", "cycling"],
    prefs: { color: "Red", mode: "Audi" },
    logIn: function () {
      this.loggedIn = true;
    },
    logOut: function () {
      this.loggedIn = false;
    },
  },
  {
    firstName: "Bob",
    lastName: "Anderson",
    email: "bob@gmail.com",
    loggedIn: true,
    hobbies: ["sports", "cycling"],
    prefs: { color: "Green", mode: "Volvo" },
    logIn: function () {
      this.loggedIn = true;
    },
    logOut: function () {
      this.loggedIn = false;
    },
  },
  {
    firstName: "Christina",
    lastName: "Lee",
    email: "chris@gmail.com",
    loggedIn: false,
    hobbies: ["reading", "cycling"],
    prefs: { color: "Pink", mode: "Hyndai" },
    logIn: function () {
      this.loggedIn = true;
    },
    logOut: function () {
      this.loggedIn = false;
    },
  },
]; //creating an array of user objects here

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);

users.forEach(function (user) {
  // if (user.loggedIn === true) {
  //   console.log(user.firstName);
  // }
  // if (user.firstName.toLowerCase().startsWith("a")) {
  //   console.log(user.lastName);
  // }
  // if (user.prefs.color.toLowerCase() === "red") {
  //   console.log(user.firstName + user.lastName);
  //   console.log(user.prefs.color);
  // }
  // write code to show the first and last name of the users who have "reading" hobby...
  // if (user.hobbies === "reading") {
  //   console.log(user.firstName + user.lastName);
  // }
  // if (user.hobbies.includes("reading")) {
  //   console.log(user.firstName + " " + user.lastName);
  // }
  console.log(user.firstName);
});
