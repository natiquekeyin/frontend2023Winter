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

var campuses = [
  [43.123, -89.333],
  [46.456, -69.2222],
  [42.3332, -90.5555],
];

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 2; j++) {
    console.log(campuses[i][j]);
  }
}
