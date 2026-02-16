const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 12502
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 15137
    }
]

// Get the sample post element from the HTML
const postElement = document.getElementById("post-1");

// Clone the post element for each post in the array and populate it with the post data
posts.forEach(post => {
    const postClone = postElement.cloneNode(true);
    postClone.querySelector(".post-avatar").src = post.avatar;
    postClone.querySelector(".post-author-name").textContent = post.name;
    postClone.querySelector(".post-location").textContent = post.location;
    postClone.querySelector(".post-image").src = post.post;
    postClone.querySelector(".post-username").textContent = post.username;
    postClone.querySelector(".post-comment").textContent = post.comment;
    postClone.querySelector(".post-likes").textContent = `${post.likes.toLocaleString('en-US')} likes`;
    postClone.id = ""; // Clear the id to avoid duplicates
    document.getElementById("app").appendChild(postClone);
});
// remove the original post element
postElement.remove();