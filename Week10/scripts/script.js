// We can associate events with all html elements.

// let body = document.body;
// console.log(body);

// window.onload = function () {
//   console.log("window loaded");
//   let dog = document.querySelector("#dog");

//   dog.onload = function () {
//     console.log("dog image loaded");
//   };
// };

window.addEventListener("DOMContentLoaded", function () {
  console.log("Window laoded");
  let dog = document.querySelector("#dog");

  dog.addEventListener("click", function () {
    dog.src = nextDogUrl(); //nextDogUrl will bring the next url from dogs.js urls array
  });

  let currentDogUrl = 0; //to keep track of current dog url
  function nextDogUrl() {
    currentDogUrl++; //incrementing the dog url
    //to make a tail with the first picture
    if (currentDogUrl === dogs.length - 1) {
      currentDogUrl = 0;
    }

    return dogs[currentDogUrl];
  }

  // now when user clicks on more dogs button.. this button should go away (removed) and all the urls from dogs. js should come here and make an unordered list

  let more = document.querySelector("#more");

  more.addEventListener("click", function () {
    let ol = document.createElement("ol");

    dogs.forEach(function (url) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = url;
      a.innerHTML = url;
      li.appendChild(a);
      ol.appendChild(li);
    });

    // append this ul in dog-list of html document

    document.querySelector("#dog-list").appendChild(ol);
  });
});
