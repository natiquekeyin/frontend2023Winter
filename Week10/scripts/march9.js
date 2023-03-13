const posts = [
  { title: "post 1", author: "Author1", body: "Post 1 is here..." },
  { title: "post 2", author: "Author2", body: "Post 2 is here..." },
];

// createPost will push the new post into the posts array after 3 seconds...
function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback(); //getPosts() will be called here..
  }, 3000);
}

// getPosts will read all the posts form array after 1 second and make a li element for each post and produce the output on page...

// One solution is Callbacks.. as used here...
function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li> <li>${post.author}</li>-------------`;
    });
    document.querySelector("#data").innerHTML = output;
  }, 1000);
}

createPost(
  { title: "post 3", author: "Author 3", body: "Post 3 here....." },
  getPosts
);
