const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const container = document.querySelector('.posts-list');
const btnLike = document.getElementsByClassName('like-button');

let post, datePost, acronym, id, nLikes;

for (let index in posts){
    post = posts[index];
    id = post.id;
    
    datePost = convertDate(post.created);
    //controllImgUser();
    printPost();
    btnLikesClicked();
}

for(let i = 0; i < posts.length; i++){
    if (!(posts[i].author.image)){
        acronym = posts[i].author.name.split(' ').map(word => word[0]).join('');

        const postMeta = document.getElementsByClassName('post-meta__icon');
        postMeta[i].innerHTML = `${acronym}`;
        postMeta[i].classList.add('profile-pic-default');
    }
}

let isClicked = false;

function btnLikesClicked(){
    for(let i = 0; i < btnLike.length; i++ ){
        btnLike[i].addEventListener('click', function(e){
            e.preventDefault();

            id = this.getAttribute('data-postid');
            let postLikes = posts[i].likes;

            if(!isClicked){
                isClicked = true;
                this.classList.add("like-button--liked");
                nLikes = postLikes + 1;
            }
            else{
                isClicked = false;
                this.classList.remove("like-button--liked");
                nLikes = postLikes;
            }

            document.getElementById(`like-counter-${id}`).innerHTML = nLikes;
        });
    }
}

function convertDate(date){
    return date.split('-').reverse().join('/');
}

function printPost(){
container.innerHTML += `
<div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.author.name}</div>
                        <div class="post-meta__time">${datePost}</div>
                    </div>
                </div>
            </div>
            <div class="post__text">${post.content}</div>
            <div class="post__image">
                <img src="${post.media}" alt="${post.author.name}">
            </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="${id}" >
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${id}" class="js-likes-counter">${post.likes}</b> persone
                        </div>
                    </div> 
                </div> 
        </div>`;
}

/*
// DA CHIEDERE
function controllImgUser(){
    if (!(post.author.image)){
        acronym = post.author.name.split(' ').map(word => word[0]).toString().replace(",","");

        const profilePic = document.querySelector('.profile-pic');
        const span = document.createElement("span");
        span.innerHTML += `${acronym}`;
        span.className = 'profile-pic-default';
        profilePic.replaceWith(span);
    }
}
*/