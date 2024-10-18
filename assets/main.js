let main=document.querySelector('.card-container')
let titlePosts=[]
let imgPosts=[]

fetch('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then(response => response.json())
.then(data=>{
    data.forEach(obj =>{
        titlePosts.push(obj.title)
    });
    data.forEach(obj =>{
        imgPosts.push(obj.thumbnailUrl)
    })
    for (let i = 0; i < data.length; i++) {
        main.innerHTML+=`
            <div class="m-3 p-3 card-text bg-white ">
                <div class="card-img bg-primary">
                    <img src="./assets/img/pin.svg" class="pin" alt="">
                </div>
                <div class="pt-2">${titlePosts[i]}</div>
            </div>
        `;
    }
});





