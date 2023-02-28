// let paragraph = document.querySelector("#para1"); // para1 is an id on my page ... go and access the element with this id
// let paragraph = document.getElementById("para1");
// paragraph.innerText = "<em>NEW TEXT</em>";
// console.log(paragraph.innerText);

// let newPara = document.createElement("p");
// newPara.innerText = "I am a new paragraph";
// newPara.id = "newPara";
// newPara.className = "demo"; // remember in js we always use className instead of class ? Why? because js has a reserver keyword as "class"

// // I need to embed or add it to my current html document....

// document.body.appendChild(newPara); //we need to append newly created element whereever we want ...

// let newPic = document.createElement("img");
// newPic.src = "./images/car.jpeg";
// newPic.alt = "Unsplah picture";
// newPic.width = "300";
// newPic.id = "myCar";

// // document.body.appendChild(newPic);
// document.querySelector("#part1").appendChild(newPic);
// console.log(newPic);

// when someone clicks on this #part1 div... a function should run that displays an alert message "You clicked on the div"...

let myDiv = document.querySelector("#part1");

myDiv.addEventListener("dblclick", function () {
  let newPic = document.createElement("img");
  newPic.src = "./images/car.jpeg";
  newPic.alt = "Unsplah picture";
  newPic.width = "300";
  newPic.id = "myCar";
  myDiv.appendChild(newPic);

  document.querySelector("#para1").innerText = "Did you like my old car???";
});
