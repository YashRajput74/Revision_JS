function filterCards(param) {
    const cards = document.querySelectorAll(".cards");
        cards.forEach((card)=>{
            if(param=="All"){
                card.classList.remove("hide");
            }
            else if(card.dataset.cat==param){
                card.classList.remove("hide");
            }
            else{
                card.classList.add("hide");
            }
        })
}

function addEvents() {
    const buttonsDiv = document.querySelector(".buttons");
    buttonsDiv.addEventListener("click", (event) => {
        if (event.target.textContent === "All") {
            filterCards("All");
        }
        else if (event.target.textContent === "Tech") {
            filterCards("Tech");
        }
        else if (event.target.textContent === "Nature") {
            filterCards("Nature");
        }
    })
}
addEvents();