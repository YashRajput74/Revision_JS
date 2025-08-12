const starCount = 5;

function addStars(starCount) {
    let tpl=``;
    for (let i = 0; i < starCount; i++) {
        tpl+=`<div class="star">★</div>`
    }
    document.querySelector("#rating").innerHTML=tpl;
}

function addEvents(){
    let 
}

function init(){
    addStars(starCount);
    addEvents();
}

init();