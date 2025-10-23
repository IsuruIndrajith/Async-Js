const posts = [
    { title: "Post 1", content: "Content of Post 1" },
    { title: "Post 2", content: "Content of Post 2" },
];

function getPosts() { 
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
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
createPost({ title: "Post 3", content: "Content of Post 3" })
    .then(getPosts)
    .catch(err => console.log(err));

