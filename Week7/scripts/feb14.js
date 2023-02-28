// When someone clicks on car picture it should be changed

let car = document.querySelector("#car");

car.addEventListener("click", function () {
  let car2 = document.querySelector("#car2");
  car2.src = "../images/car.jpeg";
  let newList = document.createElement("ul");
  newList.innerHTML = "<li>Old Car</li><li>Bad condition</li><li>Etc</li>";

  document.body.appendChild(newList);

  //   car.src = "../images/car.jpeg";
  //   console.log("car clicked!");
});
