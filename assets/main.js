let main=document.querySelector('.card-container')
let test=document.getElementById('test')
let overlay=document.getElementById('overlay')
let cardsDoc=[]
let cardsImg=[]
let cardsTitle=[]
let i=0;

fetch('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then(response => response.json())
.then(data=>{
    data.forEach(obj =>{
        cardsImg[i]=obj.thumbnailUrl
        cardsTitle[i]=obj.title
        main.innerHTML+=`
            <div class="cards" id="card${i}">
                <img src="./assets/img/pin.svg" class="pin" alt="">
                <div class="m-3 p-3 card-text bg-white shadow-lg">
                    <div class="card-img bg-primary">
                        <img src="${cardsImg[i]}" class="img-in">
                    </div>
                    <div class="pt-2">${cardsTitle[i]}</div>
                </div>
            </div>
        `
        i++;
    })
});


setTimeout(docs, 1000)
function docs(){
    for(let z=0; z<i; z++){
        cardsDoc[z]=document.getElementById(`card${z}`)
        cardsDoc[z].addEventListener('click', function(){
            overlay.style.display = 'flex'
            overlay.innerHTML=`
                <img src="${cardsImg[z]}" class="overImg" alt="">
                <button id="closeOverlay" class="btn btn-primary mt-5">Chiudi</button>
            `
            let closeOverlay=document.getElementById('closeOverlay')
            closeOverlay.addEventListener('click', function(){
                overlay.style.display = 'none'
            })
        })
    }

}





