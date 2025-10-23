import fetch from "node-fetch";

const posts = [
  { title: "Post 1", content: "Content of Post 1" },
  { title: "Post 2", content: "Content of Post 2" },
];

function getPosts() { 
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `${post.title}\n`;
    });
    console.log(output);
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false; 
      if (!error) { 
        resolve();
      } else {
        reject("Error creating post");
      }
    }, 2000);
  });
}

// Promise.all example
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve) =>
  setTimeout(resolve, 2000, 'Goodbye')
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4])
  .then(values => console.log(values))
  .catch(err => console.error(err));
