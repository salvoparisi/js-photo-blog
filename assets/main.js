let main=document.querySelector('.card-container')
let titlePosts=[]
let imgPosts=[]

fetch('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then(response => response.json())
.then(data=>{
    data.forEach(obj =>{
        main.innerHTML+=`
            <div class="cards">
                <img src="./assets/img/pin.svg" class="pin" alt="">
                <div class="m-3 p-3 card-text bg-white shadow-lg">
                    <div class="card-img bg-primary">
                        <img src="${obj.thumbnailUrl}" class="img-in">
                    </div>
                    <div class="pt-2">${obj.title}</div>
                </div>
            </div>
        `
    })
});





