// Для начала создадим функцию для генерации html размётки поста:
const createPostMarkUp = (post) => {
	return `<div class="post">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>`;
}

// Далее напишем функцию, которая будет добавлять эту размётку в контейнер:
const addPostToContainer = (container, postMarkup) => {
	container.innerHTML += postMarkup;
}

//Теперь создаём функцию для получения постов:
const fetchPosts = () =>{
    const container = document.getElementById('posts-container');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postMarkup = createPostMarkUp(post);
                addPostToContainer(container, postMarkup);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
}


fetchPosts();
    
    

