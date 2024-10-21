let main=document.querySelector('.card-container')
let overlay=document.getElementById('overlay')
let cards=[]
let cardsDoc=[]
let cardsImg=[]
let cardsTitle=[]
let i=0;

function upFirstChar(word){
    let firstChar = word.charAt(0).toUpperCase()
    finalWord = firstChar + word.slice(1)
    return finalWord
}

fetch('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then(response => response.json())
.then(data=>{
    data.forEach(obj =>{
        cardsImg[i]=obj.thumbnailUrl
        cardsTitle[i]=upFirstChar(obj.title)
        main.innerHTML+=`
            <div class="cards" id="card${i}">
                <img src="./assets/img/pin.svg" class="pin" alt="">
                <div class="m-3 p-3 card-text bg-white card-shadow">
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
        cardsDoc[z].addEventListener('mouseenter', function(){
            cardsDoc[z].classList.toggle('transform-hover');
        })
        cardsDoc[z].addEventListener('mouseleave', function() {
            cardsDoc[z].classList.remove('transform-hover');
        });
    }
}







