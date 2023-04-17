async function getAllPosts(){
    // fetch posts element from the DOM
    const postsContainer = document.querySelector(".posts");

    // fetch the api
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();

    // traverse over the array and create post
    for(let i = 0 ; i < data.length; i++){
        // create a div for the post
        const postCard = document.createElement("div");

        // create the title element - p
        const titleElement = document.createElement("p");
        // create the bodyElement
        const bodyElement = document.createElement("p");
        // create the byElemnt - p
        const byElement = document.createElement("p");
        // create the cross element - p
        const deleteElement = document.createElement("p");

        // add the content for the above created tags
        titleElement.innerHTML = data[i].title;
        bodyElement.innerHTML = data[i].body;
        byElement.innerHTML = `By ${data[i].id}`;
        // byElement.innerHTML = "By " + data[i].id;
        deleteElement.innerHTML = "X";

        // adding the onClick event listener on the deleteButton
        deleteElement.addEventListener("click", () => {
            postsContainer.removeChild(postCard);
        })

        // add the class to the above created tags
        postCard.classList.add("post");
        titleElement.classList.add("title");
        bodyElement.classList.add("body");
        byElement.classList.add("by");
        deleteElement.classList.add("deleteButton");

        // adding the above create p tags into the postCard
        postCard.appendChild(titleElement);
        postCard.appendChild(bodyElement);
        postCard.appendChild(byElement);
        postCard.appendChild(deleteElement);

        // add the postCard into the postsContainer
        postsContainer.appendChild(postCard);    
    }
}

getAllPosts();