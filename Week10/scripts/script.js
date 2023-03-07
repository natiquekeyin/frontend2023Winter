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

window.addEventListener("DOMContentLoaded", function (evt) {
  console.log("Window laoded");
  let dog = document.querySelector("#dog");

  dog.addEventListener("click", function (evt) {
    console.log("dog clicked");
    // remove the The Dog heading...
    // document.querySelector("#p1").remove();
    let p1 = document.querySelector("#p1");
    p1.remove();

    dog.src = nextDogUrl(); //nextDogUrl will bring the next url from dogs.js urls array
    evt.stopPropagation(); //dont propagate the event to my parent...
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
    more.remove();
    let ol = document.createElement("ol");
    // creates a new <ol></ol>
    dogs.forEach(function (url) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = url;
      a.innerHTML = url;
      // <a href={url}> {url}</a>
      li.appendChild(a);
      // <li><a href={url}>{url}</a></li>
      ol.appendChild(li);
    });

    // append this ol which is cooked up by forEach in dog-list of html document

    document.querySelector("#dog-list").appendChild(ol);
  });

  // Show the mouse position on the screen when user moves the mouse...show the X and Y value of mouse position on the document ....

  let body = document.body;

  body.addEventListener("mousemove", function (evt) {
    console.log("body clicked");
    // get the xPos,yPos elements in teh html, and write something inside them.
    // to access the x and y position of mouse click we can use clientX and clientY of evt...
    document.querySelector("#xPos").innerText = evt.clientX;
    document.querySelector("#yPos").innerText = evt.clientY;
  });
  // When we prouce an event to an element, it is propagated to the parent...evt.stopPropagation();

  // Timer Functions...Are browser or timer dependent functions...

  // setTimeout(function, timeinmilliseconds);
  // when the time is elapsed RUN THE FUNCTION...

  // setTimeout(function () {
  //   alert("3 seconds passed");
  // }, 3000);
  // It runs only once after teh elapsed time
  // setTimeout(function () {
  //   // dog.remove();
  //   dog.src = nextDogUrl();
  // }, 4000);

  setInterval(function () {
    dog.src = nextDogUrl();
  }, 3000);
});
