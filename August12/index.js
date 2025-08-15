const starCount = 5;

function addStars(starCount) {
    let tpl = ``;
    for (let i = 0; i < starCount; i++) {
        tpl += `<div class="star" data-num=${i} color="black">★</div>`
    }
    document.querySelector("#rating").innerHTML = tpl;
}
//jahan tak click ho vahan tak ke star yellow baaki ke black
//memoize? as in last click pe click hua hai toh sab black

//star clicked: agar next star yellow hai toh yahan tak ke star ki value yellow kardo aur aage ki black
// aur agar next star black hai toh toggle the star color till now?
function addEvents() {
    let ratingDiv = document.querySelector("#rating");
    let allStars = document.querySelectorAll(".star");
    ratingDiv.addEventListener("click", (event) => {
        let nextStarNum = parseInt(event.target.dataset.num) + 1;
        const nextStar = document.querySelector(`div[data-num="${nextStarNum}"]`);
        if (event.target.classList.contains("star")) {
            if (nextStar.style.color == "yellow") {
                allStars.forEach((star, index) => {
                    if (index < nextStarNum) {
                        star.style.color = "yellow";
                    }
                    else {
                        star.style.color = "black";
                    }
                })
            }
            else {
                allStars.forEach((star,index) => {
                    if(index<nextStarNum){
                        star.style.color = (star.style.color == "black") ? "yellow" : "black";
                    }
                })
            }
        }
    })
}

function init() {
    addStars(starCount);
    addEvents();
}

init();